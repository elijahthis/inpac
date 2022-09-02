import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import "./styles.scss";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [sideOpen, setSideOpen] = useState(false);
    const routeList = [
        { name: "Home", route: "/" },
        { name: "About Us", route: "/about-us" },
        { name: "Events", route: "/events" },
        { name: "Gallery", route: "/gallery" },
        { name: "Contact", route: "/contact" },
    ];

    console.log(window.location.pathname);

    return (
        <>
            <header className="Header">
                <div className="blue-bar">
                    <div>
                        <BsTelephoneFill size={18} />
                        <p>+2347000000000</p>
                    </div>
                    <div>
                        <GrMail size={18} />
                        <p>info@inpacschools.sch.ng</p>
                    </div>
                </div>
                <div className="main-bar">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <nav>
                        <ul>
                            {routeList.map((routeItem) => (
                                <Link to={routeItem.route}>
                                    <li
                                        className={
                                            window.location.pathname ===
                                            routeItem.route
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {routeItem.name.toUpperCase()}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </nav>
                    <div
                        className="mobile-menu-icon"
                        onClick={() => setSideOpen(true)}
                    >
                        <BiMenu size={24} />
                    </div>
                </div>
            </header>
            <div className={`mobileMenu ${sideOpen ? "mobileMenu--open" : ""}`}>
                <div className="top-actions">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <GrClose
                        size={24}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSideOpen(false)}
                    />
                </div>
                <ul>
                    {routeList.map((routeItem) => (
                        <Link
                            to={routeItem.route}
                            onClick={() => setSideOpen(false)}
                        >
                            <li>{routeItem.name.toUpperCase()}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Header;
