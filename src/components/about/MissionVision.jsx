import facility1 from "../../assets/images/facility-1.png";
import "./styles.scss";

const MissionVision = () => (
    <section className="MissionVision">
        <div className="big-block">
            <img src={facility1} alt="" />
            <div>
                <h3>Our Vision</h3>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable sourc
                </p>
            </div>
        </div>
        <div className="big-block big-block--right">
            <img src={facility1} alt="" />
            <div>
                <h3>Our Mission</h3>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable sourc
                </p>
            </div>
        </div>
    </section>
);

export default MissionVision;
