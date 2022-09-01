import "./styles.scss";
import exam1 from "../../assets/images/exam-1.png";
import exam2 from "../../assets/images/exam-2.png";
import exam3 from "../../assets/images/exam-3.png";
import exam4 from "../../assets/images/exam-4.png";

const SubscribeSection = () => {
    const examLogos = [exam1, exam2, exam3, exam4];

    return (
        <>
            <div className="SubscribeSection">
                <div className="subscribe">
                    <h2>Subscribe to our newsletter!</h2>
                    <p>We’ll keep you updated with necessary informations.</p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your email"
                        />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
            <div className="exam-logos">
                {examLogos.map((item) => (
                    <img src={item} />
                ))}
            </div>
        </>
    );
};

export default SubscribeSection;
