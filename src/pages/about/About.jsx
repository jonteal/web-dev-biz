import { Link } from "react-router-dom";
import Stock1 from "../../assets/images/website-img.jpg";
import "./about.css";
import FadeInSection from "../../components/fadeInSection/FadeInSection";
import Button from "../../components/buttons/button/Button";

const About = () => {
  return (
    <div className="about-page__main-container px-40">
      <FadeInSection>
        <div className="h-screen">
          <h1 className="font-bold text-3xl text-teal-500 py-5">About us</h1>
          <h2 className="font-bold text-6xl text-slate-100 pb-5">
            We are wild-hearted creatives who connect people to ideas through
            the almighty power of design.
          </h2>
          <h3 className="text-3xl text-slate-300">
            Based in NW Arkansas, we are a full-service creative agency, where
            form + function is our mantra, your creative brief is our canvas,
            your success is our prize. Let’s go win some hearts and minds for
            you.
          </h3>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="h-screen px-48">
          <h2 className="font-bold text-5xl text-slate-100 text-center py-3">
            Welcome to the sweet spot
          </h2>
          <p className="text-2xl text-slate-300 text-center py-3">
            We’re a boutique marketing and advertising agency, meaning you’ll
            get all the creative power of a huge agency with the specialized
            attention of a freelancer.
          </p>
          <p className="text-2xl text-slate-300 text-center py-3">
            We flex our teams to fit your project, meaning more creative
            firepower with less overhead while you reap the benefits.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-row h-screen">
          <div className="w-1/2 mr-10 h-44">
            <img src={Stock1} alt="" />
          </div>
          <div className="w-1/2 ml-10 flex flex-col justify-center">
            <h2 className="font-bold text-5xl text-slate-100">
              While you’re here, could we interest you in…
            </h2>
            <div className="flex flex-row mt-5">
              <Link
                to="/works"
                className="border rounded-3xl text-2xl text-slate-100 px-4 py-2 mr-2"
              >
                Our Work
              </Link>
              <Link
                to="/services"
                className="border rounded-3xl text-2xl text-slate-100 px-4 py-2 ml-2"
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="h-72">
          <h3 className="text-4xl text-slate-300 mb-5 w-1/3">
            Now that you’ve met us, we’d love to meet you!
          </h3>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
