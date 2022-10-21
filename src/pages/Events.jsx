import { MainBanner } from "../components/MainBanner";
import news1 from "../assets/images/news-1.png";
import news2 from "../assets/images/news-2.png";
import news3 from "../assets/images/news-3.png";
import news4 from "../assets/images/news-4.png";
import "./styles.scss";
import { Flip, Fade, Bounce } from "react-reveal";

const Events = () => {
	const eventList = [
		{
			img: news1,
			title: "Graphic design tutorial",
			date: "October, 2022.",
			desc: "Our students understand that color and images are expressways to delivering the intention and content of the mind to the world, this is how we help and watch our children create magic together.",
		},
		{
			img: news2,
			title: "Home management and catering practical",
			date: "October, 2022.",
			desc: "We believe that age and gender is not a limitation for every child to explore their flare for organization, cookery, and skillful home management, this is how we show we care.",
		},
		{
			img: news3,
			title: "Fashion Illustration",
			date: "October, 2022.",
			desc: "Clothe artistry travels far and beyond to tell tales of a country/person's culture and achievement. To us, we believe there is a story to every attire and this way is how we have chosen to interpret values and advocate modesty in our society.",
		},
		{
			img: news4,
			title: "Photography training session",
			date: "October, 2022.",
			desc: "Here is how we never let the world's beautiful moments go unnoticed, we love to think of ourselves as ones with the power to help you relive awesome memories by making them stay like they never passed with time.",
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
								{/* <span>Read more...</span> */}
							</div>
						</div>
					</Bounce>
				))}
			</div>
		</div>
	);
};

export default Events;
