import { Link } from "react-router-dom";
import Stock1 from "../../assets/images/website-img.jpg";
import { FaArrowRight } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div className="home-page__services-container h-screen">
      <div className="flex flex-row">
        <div className="w-1/2 ml-20 pr-10">
          <img src={Stock1} alt="" className="rounded-xl" />
        </div>

        <div className="w-1/2 mr-20 pl-10">
          <h2 className="font-bold text-5xl text-slate-100 pt-28 pb-20">
            Great design. No ego. Our Capabilities
          </h2>
          <div className="flex flex-row gap-3">
            <div className="w-1/3">
              <h3 className="font-bold text-2xl text-slate-100 mb-3 text-start">
                Websites
              </h3>
              <p className="text-1xl text-slate-100 text-start mb-3">
                E-commerce sites to landing pages, turn your users into
                loyalists
              </p>
              <Link
                className="font-bold text-1xl mb-3 text-start flex flex-row items-center hover:bg-sky-700 text-teal-500"
                to="services/websites"
              >
                <span className="mr-2">Learn more</span>
                <FaArrowRight className="mr-2" />
              </Link>
            </div>
            <div className="w-1/3">
              <h3 className="font-bold text-2xl text-slate-100 mb-3 text-start">
                Advertising
              </h3>
              <p className="text-1xl text-slate-100 text-start mb-3">
                Banner ads to global campaigns, get ready to get noticed
              </p>
              <Link
                className="font-bold text-1xl mb-3 text-start flex flex-row items-center hover:bg-sky-700 text-teal-500"
                to="services/websites"
              >
                <span className="mr-2">Learn more</span>
                <FaArrowRight className="mr-2" />
              </Link>
            </div>
            <div className="w-1/3">
              <h3 className="font-bold text-2xl text-slate-100 mb-3 text-start">
                Blogging
              </h3>
              <p className="text-1xl text-slate-100 text-start mb-3">
                Writing and managing company blogs for customer engagement
              </p>
              <Link
                className="font-bold text-1xl mb-3 text-start flex flex-row items-center hover:bg-sky-700 text-teal-500"
                to="services/websites"
              >
                <span className="mr-2">Learn more</span>
                <FaArrowRight className="mr-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
