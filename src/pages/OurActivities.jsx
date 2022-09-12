import { MainBanner } from "../components/MainBanner";
import facility1 from "../assets/images/facility-1.png";
import "./styles.scss";
import { Flip, Fade, Bounce } from "react-reveal";

const OurActivities = () => (
  <div className="OurActivities">
    <MainBanner title="Our Activities" />
    <div className="main-block">
      <Bounce right>
        <div className="block">
          <img src={facility1} alt="" />
          <div>
            <h2>1. SCHOOLS EVENT AND CALENDAR</h2>
            <ul>
              <li>Cultural day</li>
              <li>Independent day</li>
              <li>Teacher’s day</li>
              <li>Christmas carol</li>
              <li>Valedictory services</li>
              <li>Co-curricular activities</li>
              <li>Creative and Cultural day</li>
              <li>Mental Mathematics</li>
            </ul>
          </div>
        </div>
      </Bounce>
      <Bounce left delay={1000}>
        <div className="block block--right">
          <img src={facility1} alt="" />
          <div>
            <h2>ENTREPRENEURSHIP AND CO-CURRICULAR ACTIVITES</h2>
            <p>
              The Incorporation of entrepreneurship and co-curricular activities
              help to enhance the intellectual, social and cultural development
              of its members. These activities and societies help to harness
              talents and leadership tendencies in students, to help them work
              as a team and enhance national relevance. They also promote
              judicious use of leisure, ethical character and corporate life of
              the boarding system. The following is a list of entrepreneurship
              activities and clubs managed by the school:
            </p>
          </div>
        </div>
      </Bounce>
      <Fade bottom delay={1300}>
        <div className="lists">
          <div className="list">
            <p className="title">ENTREPRENUERSHIP ACTIVITIES:</p>
            <ul>
              <li>Coding</li>
              <li>Graphics Design</li>
              <li>Music</li>
              <li>Creative arts</li>
              <li>Catering and Home management</li>
              <li>Fashion illustration</li>
              <li>Hair styling</li>
            </ul>
          </div>
          <div className="list list--right">
            <p className="title">CO-CURRICULAR/CLUB ACTIVITIES:</p>
            <ul>
              <li>The Science club</li>
              <li>The Arts Club</li>
              <li>The Mental Mathematics club</li>
              <li>The Music band</li>
              <li>The Ballad Group</li>
              <li>The Press Crew</li>
              <li>The Chess Club</li>
              <li>The Drama Club</li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  </div>
);

export default OurActivities;
