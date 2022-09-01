import Hero from "../components/home/Hero";
import Section1 from "../components/home/Section1";
import EntranceBanner from "../components/home/EntranceBanner";
import FacilitiesSection from "../components/home/FacilitiesSection";
import SubscribeSection from "../components/home/SubscribeSection";
import Footer from "../components/Footer";

const Home = () => (
    <div className="Home">
        <Hero />
        <Section1 />
        <EntranceBanner />
        <FacilitiesSection />
        <SubscribeSection />
        <Footer />
    </div>
);

export default Home;
