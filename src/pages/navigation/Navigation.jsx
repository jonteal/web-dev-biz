import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container flex flex-row justify-between">
        <Link className="nav-link mx-3 font-serif" to="/">
          Jon Jackson
        </Link>
        <div className="nav-links">
          <Link className="nav-link mx-3 font-serif" to="about">
            About us
          </Link>
          <Link className="nav-link mx-3 font-serif" to="services">
            Our services
          </Link>
          <Link className="nav-link mx-3 font-serif" to="blog">
            Blog
          </Link>
        </div>
        <Link className="nav-link mx-3 font-serif" to="contact">
          Contact
        </Link>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
