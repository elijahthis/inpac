import { MainBanner } from "../components/MainBanner";
import "./styles.scss";

const Contact = () => (
    <div className="Contact">
        <MainBanner title={"Get in Touch"} />
        <div className="Contact-grid">
            <div className="left-contact">
                <div>Phone +23234345344</div>
                <div>
                    <p>Email</p>
                    <p>intouchschools2008@gmail.com</p>
                </div>
                <div>
                    <p>Address</p>
                    <p>1 Landbridge Avenue , Ado odo ota, Ogun, Nigeria</p>
                </div>
                <div>
                    <p>Follow us</p>
                </div>
            </div>
            <form className="ContactForm" onSubmit={(e) => e.preventDefault()}>
                <p className="desc">
                    Please fill out this form if you have any questions and some
                    will get back to you shortly.
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
    </div>
);

export default Contact;
