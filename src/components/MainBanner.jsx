// react-reveal
import { Flip } from "react-reveal";

export const MainBanner = ({ title = "" }) => (
  <div className="MainBanner">
    <Flip bottom>
      <div className="close-wrapper">{title}</div>
    </Flip>
  </div>
);
