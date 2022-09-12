import { MainBanner } from "../components/MainBanner";
import MissionVision from "../components/about/MissionVision";
import Anthems from "../components/about/Anthems";
import ValuesEthos from "../components/about/ValuesEthos";

const VisionMission = () => (
  <div className="About">
    <MainBanner title={"Vision, Mission, And Policy"} />
    <MissionVision />
    <ValuesEthos />
    <Anthems />
  </div>
);

export default VisionMission;
