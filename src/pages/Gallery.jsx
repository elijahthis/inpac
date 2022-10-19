import { MainBanner } from "../components/MainBanner";

import gallery1 from "../assets/images/gallery-1.png";
import gallery2 from "../assets/images/gallery-2.png";
import gallery3 from "../assets/images/gallery-3.png";
import gallery4 from "../assets/images/gallery-4.png";
import gallery5 from "../assets/images/gallery-5.png";
import gallery6 from "../assets/images/gallery-6.png";
import gallery11 from "../assets/images/gallery-11.png";
import gallery12 from "../assets/images/gallery-12.png";
import gallery13 from "../assets/images/gallery-13.png";
import gallery14 from "../assets/images/gallery-14.png";
import gallery15 from "../assets/images/gallery-15.png";
import "./styles.scss";
import { Flip, Fade, Bounce } from "react-reveal";
import { useState } from "react";

const Gallery = () => {
	const [showMore, setShowMore] = useState(false);

	const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
	const moreImages = [gallery11, gallery2, gallery13, gallery14, gallery15];

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
					{showMore && (
						<div>
							{moreImages.map((image, ind) => (
								<Bounce right delay={500 + 300 * ind} key={ind}>
									<img src={image} />
								</Bounce>
							))}
						</div>
					)}
					<div className="button-wrap">
						<Fade bottom delay={1000}>
							<button onClick={() => setShowMore(!showMore)}>
								{showMore ? "Show less" : "View More"}
							</button>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
