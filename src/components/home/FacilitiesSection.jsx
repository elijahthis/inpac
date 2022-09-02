import "./styles.scss";
import facility1 from "../../assets/images/facility-1.png";
import facility2 from "../../assets/images/facility-2.png";
import facility3 from "../../assets/images/facility-3.png";
import facility4 from "../../assets/images/facility-4.png";
import facility5 from "../../assets/images/facility-5.png";
import facility6 from "../../assets/images/facility-6.png";
// react-reveal
import { Flip, Fade, Bounce } from "react-reveal";

const FacilitiesSection = () => {
    const images = [
        facility1,
        facility2,
        facility3,
        facility4,
        facility5,
        facility6,
    ];

    return (
        <section className="FacilitiesSection">
            <Flip bottom>
                <h2>Our Facilities</h2>
            </Flip>
            <Fade bottom delay={1000}>
                <p>
                    Our study environment is conducive and homely for adequate
                    learninig
                </p>
            </Fade>
            <div className="images">
                {images.map((item, ind) => (
                    <Bounce right delay={1500 + 300 * ind} key={ind}>
                        <img src={item} />
                    </Bounce>
                ))}
            </div>
        </section>
    );
};

export default FacilitiesSection;
