import { Link } from "react-router-dom";
import Button from "../button/Button";

const ContactSection = () => {
  return (
    <div className="home-page__contact-section h-80 flex flex-row items-center">
      <div className="px-40">
        <h2 className="font-bold text-3xl text-slate-100 w-96 mb-10 font-Montserrat">
          Let’s make something beautility-ful together.
        </h2>
        <Link to="/contact">
          <Button>Contact us</Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
