import { MainBanner } from "../components/MainBanner";
import facility1 from "../assets/images/facility-1.png";
import "./styles.scss";
import { Flip, Fade, Bounce } from "react-reveal";

const Gallery = () => {
    const images = Array(9)
        .fill()
        .map((i) => facility1);

    return (
        <div className="Gallery">
            <MainBanner title={"Gallery"} />
            <div className="main-block">
                <div className="image-batch">
                    <div>
                        {images.map((image, ind) => (
                            <Bounce right delay={500 + 300 * ind} key={ind}>
                                <img src={image} />
                            </Bounce>
                        ))}
                    </div>
                    <div className="button-wrap">
                        <Fade bottom delay={1000}>
                            <button>View More</button>
                        </Fade>
                    </div>
                </div>
                <div className="image-batch">
                    <Flip bottom>
                        <h3>Boarding School Facilities</h3>
                    </Flip>
                    <div>
                        {images.map((image, ind) => (
                            <Bounce right delay={500 + 300 * ind} key={ind}>
                                <img src={image} />
                            </Bounce>
                        ))}
                    </div>
                    <div className="button-wrap">
                        <Fade bottom delay={1000}>
                            <button>View More</button>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
