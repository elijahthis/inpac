import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Gallery, Contact, About } from "./pages";
import Header from "./components/Header";
import ExamLogos from "./components/ExamLogos";
import Footer from "./components/Footer";

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
                    </Route>
                </Routes>
                <ExamLogos />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
