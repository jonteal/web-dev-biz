import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer bg-teal-500 px-40 flex flex-col justify-center">
      <div className="flex flex-row items-center">
        <div className="w-1/2 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2">Encompass Digital</h2>
          <div className="flex flex-row">
            <a href="/">
              <FaFacebookSquare className="text-3xl mx-2" />
            </a>
            <a href="/">
              <FaInstagram className="text-3xl mx-2" />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-start w-1/2 mb-2">
            <Link className="mx-2 font-bold text-1xl" to="work">
              Work
            </Link>
            <Link className="mx-2 font-bold text-1xl" to="about">
              About
            </Link>
            <Link className="mx-2 font-bold text-1xl" to="services">
              Services
            </Link>
            <Link className="mx-2 font-bold text-1xl" to="contact">
              Contact
            </Link>
          </div>
          <div>
            <p>© Urban Canvas | Privacy Policy | All rights reserved 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
