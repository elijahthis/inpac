import person1 from "../../assets/images/person-1.png";
import people1 from "../../assets/images/people-1.png";
import "./styles.scss";
// react-reveal
import { Bounce } from "react-reveal";

const MissionVision = () => (
	<section className="MissionVision">
		<div className="big-block big-block--right">
			<Bounce right>
				<img src={person1} alt="" />
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
				<img src={people1} alt="" />
				<div>
					<h3>Our Mission</h3>
					<p>
						Our citadel of learning concentrates her strengths in raising God
						fearing students of different religious faiths and socioeconomic
						backgrounds that are innovative, efficient, and courteous and also
						place value on how these qualities affect every facets of their
						lives. The school is further pledged to coaching and forming boys
						and girls into men and women that would in turn lead and be
						responsible for the course of their lives by channeling their
						passions into platforms to become an ambassador for excellence while
						carrying the world along.
					</p>
				</div>
			</div>
		</Bounce>
	</section>
);

export default MissionVision;
