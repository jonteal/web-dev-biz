import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, Outlet } from "react-router-dom";

import "./menuDrawer.css";

export function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="me-2 text-5xl text-zinc-100">
        &#9776;
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="canvas-drawer"
      >
        <Offcanvas.Header className="text-zinc-100" closeButton>
          <Offcanvas.Title className="text-5xl text-zinc-100">
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Fragment>
            {/* <div className="navigation-container border bg-green-800"> */}
            <div className="nav-links flex flex-col">
              <Link
                className="nav-link mx-3 text-zinc-100 font-extrabold text-3xl my-2"
                to="/"
              >
                Home
              </Link>
              <Link
                className="nav-link mx-3 text-zinc-100 font-extrabold text-3xl my-2"
                to="about"
              >
                About
              </Link>
              <Link
                className="nav-link mx-3  text-zinc-100 font-extrabold text-3xl my-2"
                to="services"
              >
                Services
              </Link>
              <Link
                className="nav-link mx-3 text-zinc-100 font-extrabold text-3xl my-2"
                to="blogs"
              >
                Blog
              </Link>
              <Link
                className="nav-link mx-3 text-zinc-100 font-extrabold text-3xl my-2"
                to="contact"
              >
                Contact
              </Link>
            </div>
            {/* </div> */}

            {/* <Outlet /> */}
          </Fragment>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
