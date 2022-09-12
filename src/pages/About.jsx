import { MainBanner } from "../components/MainBanner";
import AboutTxt from "../components/about/AboutTxt";
import Management from "../components/about/Management";

const About = () => (
  <div className="About">
    <MainBanner title={"About us"} />
    <AboutTxt />
    <Management />
  </div>
);

export default About;
