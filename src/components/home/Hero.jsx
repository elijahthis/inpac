import "./styles.scss";
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

const Hero = () => (
	<section className="Hero">
		<Swiper
			slidesPerView={1}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
			spaceBetween={0}
			loop={true}
			navigation={true}
			pagination={{ clickable: true }}
			autoplay={true}
			speed={500}
			effect={"fade"}
		>
			<SwiperSlide>
				<div className="big-bg big-bg--1"></div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="big-bg big-bg--2"></div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="big-bg big-bg--3"></div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="big-bg big-bg--4"></div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="big-bg big-bg--5"></div>
			</SwiperSlide>
		</Swiper>
		<div className="bottom-blue"></div>
		<div className="hero-text">
			<Flip bottom>
				<h1>INTOUCH PRIVATE ACADEMY</h1>
			</Flip>
			<Fade bottom delay={1000}>
				<p>Think quality. Think Intouch</p>
			</Fade>
			<Fade bottom delay={1000}>
				<a
					href="https://wa.me/+2347033417675"
					target="_blank"
					rel="noreferrer noopener"
				>
					<button>Enroll Now</button>
				</a>
			</Fade>
		</div>
	</section>
);

export default Hero;
