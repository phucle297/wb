import { useViewportSize } from "@mantine/hooks";
import * as d3 from "d3";
import { useEffect, useRef } from "react";
interface INodeCollide {
  r: number;
  x: number;
  y: number;
  fx?: number;
  fy?: number;
}
const CollideBalls = () => {
  const { height, width } = useViewportSize();
  const refWrapper = useRef<HTMLDivElement>(null);

  const generateBalls = (number: number) => {
    const k = width / 200;
    const r = d3.randomUniform(k, k * 2.5);
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 5;
    const res = Array.from({ length: number }, (_, i) => {
      const angle = (i / number) * 2 * Math.PI;
      return {
        r: r(),
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });
    return res;
  };

  useEffect(() => {
    if (!refWrapper.current || !width || !height) return;
    const balls = generateBalls(150);

    const nodes = balls.map((d) => {
      const node: INodeCollide = {
        r: d.r,
        x: d.x,
        y: d.y,
      };
      return node;
    });

    const svg = d3
      .select(refWrapper.current)
      .append("svg")
      .attr("overflow", "visible")
      .attr("width", width - 10)
      .attr("height", height);

    const ticked = () => {
      svg.selectAll("circle").remove();
      const circle = svg.selectAll("circle").data(nodes).enter().append("circle");

      circle
        .attr("r", (d) => d.r)
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("fill", (_, i) => (i === 0 ? "transparent" : "#facc15"));
    };
    const simulation = d3
      .forceSimulation(nodes)
      .alphaTarget(0.3) // stay hot
      .velocityDecay(0.1) // low friction
      .force("x", d3.forceX().strength(0.01))
      .force("y", d3.forceY().strength(0.01))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collide",
        d3
          .forceCollide()
          //  @ts-expect-error Property 'r' does not exist on type 'SimulationNodeDatum'.ts(2339)
          .radius((d) => d.r + 1)
          .iterations(3)
      )
      .force(
        "charge",
        d3.forceManyBody().strength((_, i) => (i ? 0 : (-width * 2) / 3))
      )
      .on("tick", ticked);
    const pointermove = (event: React.PointerEvent<SVGSVGElement>) => {
      const [x, y] = d3.pointer(event, refWrapper.current);
      nodes[0].fx = x;
      nodes[0].fy = y;
    };
    svg.on("pointermove", pointermove);

    return () => {
      simulation.stop();
      svg.remove();
      svg.selectAll("circle").remove();
    };
  }, [height, width]);

  return <div ref={refWrapper}></div>;
};

export default CollideBalls;
