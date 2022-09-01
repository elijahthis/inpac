import { FeatureIcon1 } from "../../svgs";

export const Section1 = () => {
    const featureList = [
        { name: "Innovation", icon: <FeatureIcon1 /> },
        { name: "Innovation", icon: <FeatureIcon1 /> },
        { name: "Innovation", icon: <FeatureIcon1 /> },
    ];
    return (
        <section className="Section1">
            <div className="main-txt">
                <h2>WELCOME TO INTOUCH PRIVATE ACADEMY</h2>
                <p>
                    At Inpac Schools, we provide the best educational experience
                    for our students, education in Honeyland Schools is well
                    rounded as we train a total child. Our mission is to produce
                    students who can think for themselves, respect dignity of
                    labour and appreciate good values of life. To inspire the
                    children with a desire for achievement and self- improvement
                    both at school and in later life.
                </p>
                <p>
                    To impact both mental and physical skills and abilities
                    necessary to live and contribute to the development of the
                    environment and society at large. We encourage intellectual
                    curiosity, entrepreneurial spirit and we foster a real sense
                    of communal endeavor. We are an inclusive, positive,
                    stimulating and an open-minded community.
                </p>
            </div>

            <div className="features-testimonials">
                <div className="features">
                    {featureList.map((feature) => (
                        <div className="feature">
                            {feature.icon} <p>{feature.name}</p>
                        </div>
                    ))}
                </div>
                <div className="testimonials">
                    <h2>Testimonials</h2>
                </div>
            </div>
        </section>
    );
};

export default Section1;
