import clsx from "clsx";

type Props = {
  title: string;
  subtitle?: string;
  img?: string;
  grayscale?: boolean;
};

const Banner = ({ title, subtitle, img, grayscale }: Props) => {
  return (
    <div
      className={clsx("flex h-[400px] flex-col items-center justify-center", [{ grayscale }])}
      style={{
        backgroundImage: `url(${img || "https://picsum.photos/1920/500"}), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <h1 className="text-4xl font-bold tracking-wider">{title}</h1>
      {subtitle && <p className="tracking-wide">{subtitle}</p>}
    </div>
  );
};

export default Banner;
