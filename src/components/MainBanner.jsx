// react-reveal
import { Flip } from "react-reveal";

export const MainBanner = ({ title = "" }) => (
    <div className="MainBanner">
        <Flip bottom>{title}</Flip>
    </div>
);
