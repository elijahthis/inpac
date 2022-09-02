import "./styles.scss";

const SubscribeSection = () => {
    return (
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
    );
};

export default SubscribeSection;
