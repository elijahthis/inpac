import { MainBanner } from "../components/MainBanner";
import facility1 from "../assets/images/facility-1.png";
import "./styles.scss";

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
                        {images.map((image) => (
                            <img src={image} />
                        ))}
                    </div>
                    <div className="button-wrap">
                        <button>View More</button>
                    </div>
                </div>
                <div className="image-batch">
                    <h3>Boarding School Facilities</h3>
                    <div>
                        {images.map((image) => (
                            <img src={image} />
                        ))}
                    </div>
                    <div className="button-wrap">
                        <button>View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
