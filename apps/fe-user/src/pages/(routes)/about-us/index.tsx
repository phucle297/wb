import Banner from "@fe-user/components/banner";
import AboutOurWebsite from "./components/about-our-website";
import Members from "./components/members";
import SupportUs from "./components/support-us";
import { default as AboutUsImg } from "@fe-user/assets/about-us.jpeg";

const AboutUs = () => {
  return (
    <div>
      <Banner subtitle="The Faces Behind The Screen" title="ABOUT US" img={AboutUsImg} grayscale />
      <Members />
      <AboutOurWebsite />
      <SupportUs />
    </div>
  );
};

export default AboutUs;
