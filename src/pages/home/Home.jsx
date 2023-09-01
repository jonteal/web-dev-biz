import { useState, useEffect } from "react";
import BlogSlider from "../../components/blogSlider/BlogSlider";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setBlogs(myJson.blogs);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="home-page__main-container h-screen">
        <h1 className="font-bold text-7xl text-slate-100 w-7/12 pt-28 pb-20 pl-20">
          Elevate Your Brand & Ignite Success
        </h1>
        <h2 className="text-2xl text-slate-100 w-7/12 pl-20 pb-40">
          Encompass Digital is a creative agency based in NW Arkansas, where We
          drive digital growth through strategic campaigns, SEO, and compelling
          content. Your success is our priority.
        </h2>
      </div>
      <div className="home-page__services-container h-screen">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h2>image</h2>
          </div>

          <h2 className="font-bold text-5xl text-slate-100 w-1/2 pt-28 pb-20 pl-20">
            Great design. No ego. Our Capabilities
          </h2>
        </div>
      </div>
      <Testimonials />
      {/* <div className="home-page__blog-container h-screen">
        <h2 className="font-bold text-4xl">Blogs</h2>
        <BlogSlider blogs={blogs} />
      </div> */}
    </>
  );
};

export default Home;
