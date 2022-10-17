import Hero from "../components/home/Hero";
import Section1 from "../components/home/Section1";
import EntranceBanner from "../components/home/EntranceBanner";
import FacilitiesSection from "../components/home/FacilitiesSection";
import SubscribeSection from "../components/home/SubscribeSection";
import ExamLogos from "../components/ExamLogos";
import Footer from "../components/Footer";
import VideoSection from "../components/home/VideoSection";

const Home = () => (
  <div className="Home">
    <Hero />
    <Section1 />
    {/* <EntranceBanner /> */}
    <FacilitiesSection />
    <SubscribeSection />
    <VideoSection />
  </div>
);

export default Home;
