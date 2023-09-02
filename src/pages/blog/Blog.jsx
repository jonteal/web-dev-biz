import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stock1 from "../../assets/images/website-img.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./blog.css";

const Blog = () => {
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
    <div className="blog-container flex flex-row items-center">
      {blogs.map((blog) => (
        <div key={blog.id} className="border w-1/4 m-5">
          <img src={Stock1} alt="" />
          <div className="p-3">
            <p>{blog.date}</p>
            <h2 className="font-serif text-xl py-2">{blog.title}</h2>
            <p className="font-serif text-base py-2">{blog.subTitle}</p>
            <Link to={`/blogs/${blog.id}`}>
              <button className="hover:bg-sky-700 flex flex-row items-center">
                <span className="blog-page__read-more-link">Read more</span>{" "}
                <FaArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
