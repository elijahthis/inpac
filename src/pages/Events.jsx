import { MainBanner } from "../components/MainBanner";
import facility1 from "../assets/images/facility-1.png";
import "./styles.scss";
import { Flip, Fade, Bounce } from "react-reveal";

const Events = () => {
	const eventList = [
		{
			img: facility1,
			title: "Our 4th Inter- House Sport was a success!",
			date: "April 15th, 2022.",
			desc: "Lorem ipsum dolor sit am volutpat. Dolor, nec, molestie risus lee dictneque elit risus vivamus venenatis pellentesque. Blandit platea in arcu eget scelerisque pis ornare vulputate id phasellus. Ultrices velit donec scelerisque id iaculis amet. Vesti. ",
		},
		{
			img: facility1,
			title: "Our 4th Inter- House Sport was a success!",
			date: "April 15th, 2022.",
			desc: "Lorem ipsum dolor sit am volutpat. Dolor, nec, molestie risus lee dictneque elit risus vivamus venenatis pellentesque. Blandit platea in arcu eget scelerisque pis ornare vulputate id phasellus. Ultrices velit donec scelerisque id iaculis amet. Vesti.",
		},
		{
			img: facility1,
			title: "Our 4th Inter- House Sport was a success!",
			date: "April 15th, 2022.",
			desc: "Lorem ipsum dolor sit am volutpat. Dolor, nec, molestie risus lee dictneque elit risus vivamus venenatis pellentesque. Blandit platea in arcu eget scelerisque pis ornare vulputate id phasellus. Ultrices velit donec scelerisque id iaculis amet. Vesti.",
		},
	];

	return (
		<div className="Events">
			<MainBanner title="News" />
			<div className="main-block">
				{eventList.map((eventItem, ind) => (
					<Bounce right delay={300 * ind} key={ind}>
						<div className="eventItem">
							<img src={eventItem.img} alt="" srcset="" />
							<div className="bulk">
								<h3>{eventItem.title}</h3>
								<button>{eventItem.date}</button>
								<p>{eventItem.desc}</p>
								<span>Read more...</span>
							</div>
						</div>
					</Bounce>
				))}
			</div>
		</div>
	);
};

export default Events;
