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
						Intouch Private Academy was established in January 2011 by the
						schools proprietress and educationist, who is driven by the
						compulsion to see younglings thrive and make a name for themselves.
						At Intouch Private Academy every student is treated essentially as
						an individual, with the potential for further excellence waiting to
						be explored and refined. Our students are carefully guided through
						their adolescence and taught to see mishaps and failures as success
						inclined, provided that they learn from the negative experiences and
						also to encourage the baby steps of progress taken by fellow
						students likewise. This atmosphere encourages our students to
						develop a lasting sense of moral, social and spiritual
						responsibility. The aim is to turn out self-assured and caring
						people through association and the co-activity of all school based
						help administrations. The school likewise has prepared boarding
						facilities to house and really focus on her boarding students:
					</p>
					<p className="left">
						• House Parents are endowed with the responsibility of the wellbeing
						of the students within the classroom and school context as well as
						ensuring continuity of care and wellbeing of the wards, supported by
						the resident medical staff, they also monitor assignments as well as
						supervising evening weekend study time. They develop firm,
						meaningful, nurturing relationships with their wards.
					</p>
					<p className="left">
						• In upholding the schools ethos we have developed a behavior policy
						with a set of clearly defined and rigorously enforced expectations
						that are consistent. The end to this conduct strategy is to permit
						students to foster self-restraint, mindfulness and thought for other
						people. The policy also aims at helping students build intrinsic
						value, a well implemented good behavior policy can also help
						students to develop in ways that transcend the curriculum, equipping
						them for life after school. We have zero tolerance for bullying and
						other vices of indiscipline.
					</p>
					<p className="left">
						• The counselling unit offers a range of support to students when
						need arises.
					</p>
					<p className="left">
						• school encourages graduating student of the senior category to
						study and acquire their first degree in the United States or Canada
						by providing necessary information and aid needed to make this a
						dream come through.
					</p>
					<p className="left">
						Note: All financial requirements will be solely the responsibility
						of the students’ parents/guardian. Every curricular activity is
						properly curated to appeal to the passion and speculation of each
						student as the school or parent sees fit.
					</p>
				</div>
			</Fade>
		</div>
	);
};

export default AboutTxt;
