import { MainBanner } from "../components/MainBanner";
import MissionVision from "../components/about/MissionVision";
import Anthems from "../components/about/Anthems";

const About = () => (
    <div className="About">
        <MainBanner title={"About us"} />
        <MissionVision />
        <Anthems />
    </div>
);

export default About;
