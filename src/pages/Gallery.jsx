import { MainBanner } from "../components/MainBanner";
import facility1 from "../assets/images/facility-1.png";
import facility2 from "../assets/images/facility-2.png";
import facility3 from "../assets/images/facility-3.png";
import facility4 from "../assets/images/facility-4.png";
import facility5 from "../assets/images/facility-5.png";
import facility6 from "../assets/images/facility-6.png";
import gallery1 from "../assets/images/gallery-1.png";
import gallery2 from "../assets/images/gallery-2.png";
import gallery3 from "../assets/images/gallery-3.png";
import gallery4 from "../assets/images/gallery-4.png";
import gallery5 from "../assets/images/gallery-5.png";
import gallery6 from "../assets/images/gallery-6.png";
import "./styles.scss";
import { Flip, Fade, Bounce } from "react-reveal";

const Gallery = () => {
	const images = [
		facility1,
		facility2,
		facility3,
		facility4,
		facility5,
		facility6,
		gallery1,
		gallery2,
		gallery3,
		gallery4,
		gallery5,
		gallery6,
	];

	return (
		<div className="Gallery">
			<MainBanner title={"Gallery"} />
			<div className="main-block">
				{/* <div className="image-batch">
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
                </div> */}
				<div className="image-batch">
					<Flip bottom>
						<h3>Photos</h3>
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
