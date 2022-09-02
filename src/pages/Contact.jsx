import { MainBanner } from "../components/MainBanner";
import "./styles.scss";
// react-reveal
import { Flip, Fade, Bounce } from "react-reveal";
import {
    BsTelephoneFill,
    BsTwitter,
    BsFacebook,
    BsInstagram,
    BsWhatsapp,
} from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { GrMail } from "react-icons/gr";

const Contact = () => (
    <div className="Contact">
        <MainBanner title={"Get in Touch"} />
        <Fade bottom delay={500}>
            <div className="Contact-grid">
                <div className="left-contact">
                    <div className="flex">
                        <BsTelephoneFill /> <p>+23234345344</p>
                    </div>
                    <div className="flex">
                        <BsWhatsapp /> <p>+23234345344</p>
                    </div>
                    <div className="flex">
                        <GrMail />
                        <p>intouchschools2008@gmail.com</p>
                    </div>
                    <div className="flex">
                        <IoLocation />
                        <p>1 Landbridge Avenue, Ado odo ota, Ogun, Nigeria</p>
                    </div>
                    <div>
                        <p className="title">Follow us</p>
                        <div className="icons">
                            <BsTwitter />
                            <BsFacebook />
                            <BsInstagram />
                        </div>
                    </div>
                </div>
                <form
                    className="ContactForm"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <p className="desc">
                        Please fill out this form if you have any questions and
                        some will get back to you shortly.
                    </p>
                    <label htmlFor="">
                        Your name
                        <input type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Your email
                        <input type="email" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Subject
                        <input type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Message (optional)
                        <textarea name="" id="" cols="30" rows="6"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </Fade>
    </div>
);

export default Contact;
