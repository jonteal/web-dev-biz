import { useState, useEffect } from "react";

import "./blog.css";
import BlogCard from "../../components/blogCard/BlogCard";

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
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
