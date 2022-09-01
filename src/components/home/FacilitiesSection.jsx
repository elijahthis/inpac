import "./styles.scss";
import facility1 from "../../assets/images/facility-1.png";
import facility2 from "../../assets/images/facility-2.png";
import facility3 from "../../assets/images/facility-3.png";
import facility4 from "../../assets/images/facility-4.png";
import facility5 from "../../assets/images/facility-5.png";
import facility6 from "../../assets/images/facility-6.png";

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
            <h2>Our Facilities</h2>
            <p>
                Our study environment is conducive and homely for adequate
                learninig
            </p>
            <div className="images">
                {images.map((item) => (
                    <img src={item} />
                ))}
            </div>
        </section>
    );
};

export default FacilitiesSection;
