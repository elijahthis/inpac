import { MainBanner } from "../components/MainBanner";
import facility1 from "../assets/images/facility-1.png";

const OurActivities = () => {
    const eventList = [
        {
            img: facility1,
            title: "Our 4th Inter- House Sport was a success!",
            date: "April 15th, 2022.",
            desc: "Lorem ipsum dolor sit am volutpat. Dolor, nec, molestie risus lee dictneque elit risus vivamus venenatis pellentesque. Blandit platea in arcu eget scelerisque pis ornare vulputate id phasellus. Ultrices velit donec scelerisque id iaculis amet. Vesti. Read more...",
        },
        {
            img: facility1,
            title: "Our 4th Inter- House Sport was a success!",
            date: "April 15th, 2022.",
            desc: "Lorem ipsum dolor sit am volutpat. Dolor, nec, molestie risus lee dictneque elit risus vivamus venenatis pellentesque. Blandit platea in arcu eget scelerisque pis ornare vulputate id phasellus. Ultrices velit donec scelerisque id iaculis amet. Vesti. Read more...",
        },
        {
            img: facility1,
            title: "Our 4th Inter- House Sport was a success!",
            date: "April 15th, 2022.",
            desc: "Lorem ipsum dolor sit am volutpat. Dolor, nec, molestie risus lee dictneque elit risus vivamus venenatis pellentesque. Blandit platea in arcu eget scelerisque pis ornare vulputate id phasellus. Ultrices velit donec scelerisque id iaculis amet. Vesti. Read more...",
        },
    ];

    return (
        <div className="OurActivities">
            <MainBanner title="Our Activities" />
            <div className="main-block">
                {eventList.map((eventItem) => (
                    <div className="eventItem">
                        <img src={eventItem.img} alt="" srcset="" />
                        <div className="bulk">
                            <h3>{eventItem.title}</h3>
                            <button>{eventItem.date}</button>
                            <p>{eventItem.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurActivities;
