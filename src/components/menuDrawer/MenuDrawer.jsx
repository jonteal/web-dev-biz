import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, Outlet } from "react-router-dom";

export function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        &#9776; open
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="bg-slate-500"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Fragment>
            {/* <div className="navigation-container border bg-green-800"> */}
            <div className="nav-links flex flex-col">
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
            {/* </div> */}

            {/* <Outlet /> */}
          </Fragment>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
