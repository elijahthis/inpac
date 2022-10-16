import facility1 from "../../assets/images/facility-1.png";
import "./styles.scss";
// react-reveal
import { Bounce } from "react-reveal";

const MissionVision = () => (
	<section className="MissionVision">
		<div className="big-block big-block--right">
			<Bounce right>
				<img src={facility1} alt="" />
				<div>
					<h3>Our Vision</h3>
					<p>
						Our school envisages being a pace setting institution committed to
						quality, holistic and renowned education and staff excellence for
						the purpose of restructuring the credibility of education and
						promoting good morale in our community.
					</p>
				</div>
			</Bounce>
		</div>
		<Bounce left delay={1000}>
			<div className="big-block">
				<img src={facility1} alt="" />
				<div>
					<h3>Our Mission</h3>
					<p>
						Our school envisages being a pace setting institution committed to
						quality, holistic and renowned education and staff excellence for
						the purpose of restructuring the credibility of education and
						promoting good morale in our community.
					</p>
				</div>
			</div>
		</Bounce>
	</section>
);

export default MissionVision;
