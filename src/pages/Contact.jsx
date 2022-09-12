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
          <a
            href="tel:+2347033417675"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="flex">
              <BsTelephoneFill /> <p>+234 703 3417 675</p>
            </div>{" "}
          </a>
          <a
            href="https://wa.me/+2347033417675"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="flex">
              <BsWhatsapp /> <p>+234 703 3417 675</p>
            </div>
          </a>
          <a
            href="mailto:intouchschools2008@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="flex">
              <GrMail />
              <p>intouchschools2008@gmail.com</p>
            </div>
          </a>
          <a
            href="https://goo.gl/maps/oN6LRdPbfQnxgDFK7"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="flex">
              <IoLocation size={20} />
              <p>1 Landbridge Avenue, Ado odo ota, Ogun, Nigeria</p>
            </div>
          </a>
          <div>
            <p className="title">Follow us</p>
            <div className="icons">
              {/* <BsTwitter /> */}
              <a
                href="https://web.facebook.com/Intouchschools/"
                target="blank"
                rel="noreferrer noopener"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/intouch_schools/"
                target="blank"
                rel="noreferrer noopener"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <form className="ContactForm" onSubmit={(e) => e.preventDefault()}>
          <p className="desc">
            Please fill out this form if you have any questions and some will
            get back to you shortly.
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
