import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { OffCanvasExample } from "../../components/menuDrawer/MenuDrawer";

import "./navigation.css";

const Navigation = () => {
  const [className, setClassName] = useState("drawer-closed");
  console.log("classname 1: ", className);

  const handleOpenDrawer = () => {
    setClassName("drawer-opened");
    console.log("className after click open: ", className);
  };

  const handleCloseDrawer = () => {
    setClassName("drawer-closed");
    console.log("className after click close: ", className);
  };

  return (
    <>
      {/* <Link
        className="nav-link mx-3 flex-wrap flex text-3xl text-zinc-100"
        to="/"
      >
        Encompass Digital
      </Link> */}

      <OffCanvasExample placement="end" />
      {/* <Fragment>
        <div className={`navigation-container border ${className}`}>
          <div className="nav-links flex flex-col">
            <a
              className="text-zinc-100 text-3xl closebtn"
              onClick={handleCloseDrawer}
            >
              &times;
            </a>
            <Link className="nav-link mx-3 text-zinc-100" to="about">
              About us
            </Link>
            <Link className="nav-link mx-3  text-zinc-100" to="services">
              Our services
            </Link>
            <Link className="nav-link mx-3 text-zinc-100" to="blogs">
              Blog
            </Link>
            <Link className="nav-link mx-3 text-zinc-100" to="contact">
              Contact
            </Link>
          </div>
        </div>

        <Outlet />
      </Fragment> */}
    </>
  );
};

export default Navigation;
