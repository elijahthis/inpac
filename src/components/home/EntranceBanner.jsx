import "./styles.scss";
// react-reveal
import { Flip, Fade } from "react-reveal";

const EntranceBanner = () => (
    <div className="EntranceBanner">
        <Flip bottom>
            <h2>INPAC SCHOOLS ENTRANCE EXAMINATION</h2>
        </Flip>
        <Fade bottom delay={1000}>
            <p>
                Entrance Examination Dates: March 26th, April 30th, June 25th,
                and August 27th.
            </p>
        </Fade>
        <div className="days-div">
            <Flip bottom delay={1500}>
                <p className="number">15</p>
            </Flip>
            <Fade bottom delay={1800}>
                <p>DAYS TO GO</p>
            </Fade>
        </div>
    </div>
);

export default EntranceBanner;
