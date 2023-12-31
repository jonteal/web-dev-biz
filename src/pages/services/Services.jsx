import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import WebsiteImage from "../../assets/images/website-img.jpg";

import "./services.css";
import FadeInSection from "../../components/fadeInSection/FadeInSection";

const Services = () => {
  return (
    <div className="services-page__main-container">
      <FadeInSection>
        <div className="services-page__headers-container h-screen px-40 pt-10">
          <h1 className="text-3xl mt-10 mb-5 text-teal-500">Our Services</h1>
          <h2 className="text-5xl text-zinc-100 font-extrabold w-7/12 pb-44">
            Your technology and marketing needs, covered.
          </h2>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="services-page__services-container flex flex-col items-center">
          <div className="flex flex-row px-40 h-96 mt-40 mb-10">
            <div className="w-1/2 pr-10">
              <h3 className="services-page__service-label text-5xl font-bold mb-10">
                Websites
              </h3>
              <h4 className="services-page__service-description text-3xl">
                From campaign landing pages to full e-commerce sites, we offer
                content strategy, UX, design, and development to give your brand
                a digital home that will attract users and keep them coming
                back.
              </h4>
              <Link to="websites">
                <div className="flex flex-row items-center mt-3">
                  <span className="mr-2 text-lg">Learn more</span>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
            <div className="services-page__service-image w-1/2 overflow-hidden">
              <img src={WebsiteImage} alt="Websites" />
            </div>
          </div>
          <div className="flex flex-row px-40 h-96 mb-10">
            <div className="services-page__service-image w-1/2 overflow-hidden">
              <img src={WebsiteImage} alt="Websites" />
            </div>
            <div className="w-1/2 pl-10">
              <h3 className="services-page__service-label text-5xl font-bold mb-10">
                Advertising
              </h3>
              <h4 className="services-page__service-description text-3xl">
                From campaign landing pages to full e-commerce sites, we offer
                content strategy, UX, design, and development to give your brand
                a digital home that will attract users and keep them coming
                back.
              </h4>
              <Link to="advertising">
                <div className="flex flex-row items-center mt-3">
                  <span className="mr-2 text-lg">Learn more</span>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-row px-40 h-96 mb-10">
            <div className="w-1/2 pr-10">
              <h3 className="services-page__service-label text-5xl font-bold mb-10">
                Blogging
              </h3>
              <h4 className="services-page__service-description text-3xl">
                From campaign landing pages to full e-commerce sites, we offer
                content strategy, UX, design, and development to give your brand
                a digital home that will attract users and keep them coming
                back.
              </h4>
              <Link to="blogging">
                <div className="flex flex-row items-center mt-3">
                  <span className="mr-2 text-lg">Learn more</span>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
            <div className="services-page__service-image w-1/2 overflow-hidden">
              <img src={WebsiteImage} alt="Websites" />
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Services;
