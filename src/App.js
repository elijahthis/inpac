import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Home,
    Gallery,
    Contact,
    About,
    OurActivities,
    Error404,
} from "./pages";
import Header from "./components/Header";
import ExamLogos from "./components/ExamLogos";
import Footer from "./components/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="about-us" element={<About />} />
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="events" element={<OurActivities />} />
                        <Route path="*" element={<Error404 />} />
                    </Route>
                </Routes>
                <ExamLogos />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
