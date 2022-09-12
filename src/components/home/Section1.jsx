import { FeatureIcon1, FeatureIcon2, FeatureIcon3 } from "../../svgs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
// react-reveal
import { Flip, Fade } from "react-reveal";

export const Section1 = () => {
  const featureList = [
    { name: "Innovation", icon: <FeatureIcon1 /> },
    { name: "Innovation", icon: <FeatureIcon2 /> },
    { name: "Innovation", icon: <FeatureIcon3 /> },
  ];
  const testimonialList = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    "Curabitur iaculis molesti. Ut nec augue ut nisi elementum dictum. Phasellus at orci maximus,, dignissim diam. Nunc eu libero eu.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  ];
  return (
    <section className="Section1">
      <div className="main-txt">
        <Flip bottom>
          <h2>WELCOME TO INTOUCH PRIVATE ACADEMY</h2>
        </Flip>
        <Fade bottom delay={1000}>
          <p>
            You sought excellence and you found us, it is with great optimism I
            welcome our new and returning staff and student, your desire to be a
            part of this institution and what she represents portrays your
            commitment to building yourself to the ideal norm. The school has
            created frameworks that work with openness, wellbeing and
            responsiveness to students requirements. We will utilize various
            modalities - mixed, on the web and eye to eye - and our profoundly
            prepared and serious workforce and support staff stand prepared to
            work with your intellectual and self-improvement.
          </p>
          <p>
            The school is still committed to your holistic development and we
            are guided by the principles of our faith and seek to inculcate
            values and attitudes that promote the growth and development of our
            students, our institution and the country. Our quintessential
            co-curricular program offers assorted open doors for you to
            investigate your inclinations and to foster authority abilities.
          </p>
        </Fade>
      </div>

      <div className="features-testimonials">
        <div className="features">
          {featureList.map((feature) => (
            <div className="feature">
              {feature.icon} <p>{feature.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="quotes">
          <Swiper
            slidesPerView={1}
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectFade,
            ]}
            spaceBetween={0}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={true}
            speed={500}
            // effect={"fade"}
          >
            {testimonialList.map((item, ind) => (
              <SwiperSlide key={ind}>
                <p className="testimonial">
                  {item}
                  <span className="quotes">“</span>
                  <span className="name">Dr Abiodun</span>
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Section1;
