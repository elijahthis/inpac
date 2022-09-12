import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import "./styles.scss";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [sideOpen, setSideOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(-1);
  const routeList = [
    { name: "Home", route: "/" },
    {
      name: "About Us",
      route: "/about-us",
      list: [
        { name: "About us", route: "" },
        { name: "Vision/Mission", route: "/vision-mission" },
      ],
    },
    {
      name: "Events",
      route: "/events",
      list: [
        { name: "News", route: "/news" },
        { name: "Our activities", route: "/our-activities" },
      ],
    },
    { name: "Gallery", route: "/gallery" },
    { name: "Contact", route: "/contact" },
  ];

  console.log(window.location.pathname);

  useEffect(() => {
    const resetDrop = () => setActiveDrop(-1);
    document.addEventListener("click", resetDrop);
  }, []);

  useEffect(() => {
    setActiveDrop(-1);
  }, [window.location.href]);

  return (
    <>
      <header className="Header">
        <div className="blue-bar">
          <div>
            <BsTelephoneFill size={18} />
            <p>
              <a
                href="tel:+2347033417675"
                target="_blank"
                rel="noreferrer noopener"
              >
                +2347033417675
              </a>
            </p>
          </div>
          <a
            href="mailto:intouchschools2008@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div>
              <GrMail size={18} />
              <p>intouchschools2008@gmail.com</p>
            </div>
          </a>
        </div>
        <div className="main-bar">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <nav>
            <ul>
              {routeList.map((routeItem, ind) => (
                <div
                  className="divLink"
                  key={ind}
                  onClick={(e) => {
                    e.preventDefault();
                    if (routeItem.list) {
                      e.stopPropagation();
                      setActiveDrop(ind);
                    }
                  }}
                >
                  <Link to={!routeItem.list ? routeItem.route : "#"}>
                    <li
                      className={
                        window.location.pathname === routeItem.route
                          ? "active"
                          : ""
                      }
                    >
                      {routeItem.name.toUpperCase()}
                    </li>
                  </Link>
                  {routeItem.list && (
                    <div
                      className={`divLink__drop ${
                        activeDrop === ind && "divLink__drop--open"
                      }`}
                    >
                      {routeItem.list.map((item) => (
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <Link to={`${routeItem.route}${item.route}`}>
                            <div className="divLink__drop__item">
                              {item.name}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </nav>
          <div className="mobile-menu-icon" onClick={() => setSideOpen(true)}>
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
            <div>
              <Link
                to={!routeItem.list && routeItem.route}
                onClick={() => {
                  if (!routeItem.list) setSideOpen(false);
                }}
                className={
                  window.location.pathname === routeItem.route &&
                  !routeItem.list
                    ? "active"
                    : ""
                }
                style={{ fontWeight: routeItem.list ? 400 : 500 }}
              >
                <li>{routeItem.name.toUpperCase()}</li>
              </Link>
              {routeItem.list &&
                routeItem.list.map((item) => (
                  <div className="subItem">
                    <Link
                      to={`${routeItem.route}${item.route}`}
                      onClick={() => setSideOpen(false)}
                      // className={
                      //   window.location.pathname.startsWith(
                      //     `${routeItem.route}${item.route}`
                      //   )
                      //     ? "active"
                      //     : ""
                      // }
                      className={
                        window.location.pathname ===
                        `${routeItem.route}${item.route}`
                          ? "active"
                          : ""
                      }
                    >
                      <li>{item.name.toUpperCase()}</li>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
