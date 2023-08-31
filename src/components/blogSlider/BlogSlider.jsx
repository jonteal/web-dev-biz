import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };
  return (
    <div className="px-20 bg-slate-800">
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div className="bg-teal-200">
          <h3>1</h3>
        </div>
        <div className="bg-teal-200">
          <h3>2</h3>
        </div>
        <div className="bg-teal-200">
          <h3>3</h3>
        </div>
        <div className="bg-teal-200">
          <h3>4</h3>
        </div>
        <div className="bg-teal-200">
          <h3>5</h3>
        </div>
        <div className="bg-teal-200">
          <h3>6</h3>
        </div>
        <div className="bg-teal-200">
          <h3>7</h3>
        </div>
        <div className="bg-teal-200">
          <h3>8</h3>
        </div>
        <div className="bg-teal-200">
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
};

export default BlogSlider;
