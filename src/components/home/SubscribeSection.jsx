import "./styles.scss";
// react-reveal
import { Flip, Fade, Bounce } from "react-reveal";

const SubscribeSection = () => {
    return (
        <div className="SubscribeSection">
            <div className="subscribe">
                <Flip bottom>
                    <h2>Subscribe to our newsletter!</h2>
                </Flip>
                <Fade bottom delay={1000}>
                    <p>We’ll keep you updated with necessary informations.</p>
                </Fade>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Bounce bottom delay={1500}>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your email"
                        />
                    </Bounce>
                    <Bounce bottom delay={2000}>
                        <input type="submit" value="Subscribe" />
                    </Bounce>
                </form>
            </div>
        </div>
    );
};

export default SubscribeSection;
