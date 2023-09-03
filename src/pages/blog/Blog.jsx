import { useState, useEffect } from "react";

import "./blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import FadeInSection from "../../components/fadeInSection/FadeInSection";

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
    <FadeInSection>
      <div className="blog-container flex flex-row items-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </FadeInSection>
  );
};

export default Blog;
