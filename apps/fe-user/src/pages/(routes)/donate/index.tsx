import Banner from "@fe-user/components/banner";
import { default as DonateImg } from "@fe-user/assets/donate.jpeg";
import Content from "./components/content";

const Donate = () => {
  return (
    <>
      <Banner title="Ủng hộ/Donate" img={DonateImg} grayscale />
      <Content />
    </>
  );
};

export default Donate;
