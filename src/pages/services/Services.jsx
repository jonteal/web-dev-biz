import WebsiteImage from "../../assets/images/website-img.jpg";

import "./services.css";

const Services = () => {
  return (
    <div className="services-page__main-container">
      <div className="services-page__headers-container pl-20 pt-10">
        <h1 className="text-3xl mt-10 mb-5 text-teal-500">Our Services</h1>
        <h2 className="text-5xl text-zinc-100 font-extrabold w-7/12 pb-44">
          Your technology and marketing needs, covered.
        </h2>
      </div>

      <div className="services-page__services-container flex flex-col items-center">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h3 className="services-page__service-label text-5xl font-bold">
              Websites
            </h3>
            <h4 className="services-page__service-description text-3xl font-bold">
              From campaign landing pages to full e-commerce sites, we offer
              content strategy, UX, design, and development to give your brand a
              digital home that will attract users and keep them coming back.
            </h4>
          </div>
          <div className="services-page__service-image w-1/2">
            <img src={WebsiteImage} alt="Websites" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
