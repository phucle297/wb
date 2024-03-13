import { Carousel as MantineCarousel } from "@mantine/carousel";
import { nanoid } from "@reduxjs/toolkit";
import { ReactElement, ReactNode } from "react";
import "@mantine/carousel/styles.css";

type Props = {
  data: ReactElement[] | ReactNode[];
  settings?: object;
};

const Carousel = ({ data }: Props) => {
  return (
    <div className="relative w-full">
      <MantineCarousel withIndicators loop>
        {data.map((item) => {
          return <MantineCarousel.Slide key={nanoid()}>{item}</MantineCarousel.Slide>;
        })}
      </MantineCarousel>
    </div>
  );
};

export default Carousel;
