import { useState, useEffect } from "react";
import "./blog.css";
import { Link } from "react-router-dom";

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
    <div className="blog-container flex flex-col items-center">
      {blogs.map((blog) => (
        <div key={blog.id} className="border w-5/12 my-5 py-5">
          <p>{blog.date}</p>
          <h2 className="font-serif text-xl">{blog.title}</h2>
          <p className="font-serif text-base">{blog.subTitle}</p>
          <Link to={`/blogs/${blog.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
