import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import stock from "../../assets/images/website-img.jpg";

const testimonialsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
    designation: "Manager",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!",
    designation: "Accountant",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?",
    designation: "CEO",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="testimonials" className="testimonials-block">
      <div className="title-holder">
        <h2 className="font-bold text-2xl italic text-slate-900 text-center my-8">
          what are clients are saying!
        </h2>
      </div>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="mx-72 h-48"
        data-bs-theme="dark"
      >
        {testimonialsData.map((t) => {
          return (
            <Carousel.Item className="align-self">
              <div className="border w-7/12 m-auto flex justify-center flex-col items-center">
                <h3 className="font-bold text-2xl text-slate-900 text-center">
                  {t.name}
                </h3>
                <p className="font-thin text-1xl text-slate-900 text-center">
                  {t.description}
                </p>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Testimonials;
