import logo from "../assets/images/logo.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { GrMail } from "react-icons/gr";

const Footer = () => (
    <footer className="Footer">
        <div className="bulk">
            <div className="logo-link">
                <img src={logo} alt="" />
                <div className="social-media">
                    <a href={null}>
                        <BsFacebook size={20} />
                    </a>
                    <a href={null}>
                        <BsInstagram size={20} />
                    </a>
                    <a href={null}>
                        <AiFillTwitterCircle size={20} />
                    </a>
                </div>
            </div>
            <div className="list">
                <p className="title">CONTACT US</p>
                <div>
                    <IoIosSend size={24} />
                    <p>1 Landbridge Avenue , Ado odo ota, Ogun, Nigeria</p>
                </div>
                <div>
                    <BsTelephoneFill size={16} />
                    <p>+234 243674889</p>
                </div>
                <div>
                    <BsTelephoneFill size={16} />
                    <p>+234 243674889</p>
                </div>
                <div>
                    <GrMail size={16} />
                    <p>Info@Inpacshools.sch.ng</p>
                </div>
            </div>
            <div className="list">
                <p className="title">DOWNLOAD CENTER</p>
                <div>
                    <BiChevronRight size={24} />
                    <p>Calendar</p>
                </div>
                <div>
                    <BiChevronRight size={24} />
                    <p>Lesson Time-table</p>
                </div>
                <div>
                    <BiChevronRight size={24} />
                    <p>Exam Time-table</p>
                </div>
                <div>
                    <BiChevronRight size={24} />
                    <p>Latest Newsletters</p>
                </div>
            </div>
            <div className="list">
                <p className="title">FEATURED LINK</p>
                <div>
                    <BiChevronRight size={24} />
                    <p>About us</p>
                </div>
                <div>
                    <BiChevronRight size={24} />
                    <p>Alumni</p>
                </div>
                <div>
                    <BiChevronRight size={24} />
                    <p>Admission</p>
                </div>
                <div>
                    <BiChevronRight size={24} />
                    <p>FAQs</p>
                </div>
            </div>
        </div>
        <div className="bottom">Ⓒ 2022 Inpac schools. All rights reserved</div>
    </footer>
);

export default Footer;
