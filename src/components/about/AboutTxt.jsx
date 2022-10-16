import "./styles.scss";
import { Flip, Fade } from "react-reveal";

const AboutTxt = () => {
	return (
		<div className="AboutTxt">
			<Flip bottom>
				<h2>ABOUT INTOUCH PRIVATE ACADEMY</h2>
			</Flip>
			<Fade bottom delay={1000}>
				<div>
					<p>
						You sought excellence and you found us, it is with great optimism I
						welcome our new and returning staff and student, your desire to be a
						part of this institution and what she represents portrays your
						commitment to building yourself to the ideal norm. The school has
						created frameworks that work with openness, wellbeing and
						responsiveness to students requirements. We will utilize various
						modalities - mixed, on the web and eye to eye - and our profoundly
						prepared and serious workforce and support staff stand prepared to
						work with your intellectual and self-improvement.
					</p>
					<p>
						The school is still committed to your holistic development and we
						are guided by the principles of our faith and seek to inculcate
						values and attitudes that promote the growth and development of our
						students, our institution and the country. Our quintessential
						co-curricular program offers assorted open doors for you to
						investigate your inclinations and to foster authority abilities.
					</p>
					{/* <p className="left">
						• The counselling unit offers a range of support to students when
						need arises.
					</p> */}
				</div>
			</Fade>
		</div>
	);
};

export default AboutTxt;
