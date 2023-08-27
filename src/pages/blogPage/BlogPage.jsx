import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./blogPage.css";

const BlogPage = () => {
  const { id } = useParams();
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

  const selectedBlog = blogs?.filter((blog) => blog.id === id)[0];
  const paragraphs = selectedBlog?.body;
  console.log("paragraphs: ", typeof paragraphs);

  return (
    <div className="flex flex-col items-start px-28">
      <div className="flex flex-row items-center">
        <p className="mb-10 mt-14 font-serif text-lg">{selectedBlog?.date}</p>
        <p className="mx-3">-</p>
        <p className="mb-10 mt-14 font-serif text-lg">
          Written by {selectedBlog?.author}
        </p>
      </div>
      <h1 className="font-serif text-6xl mb-16 font-extralight">
        {selectedBlog?.title}
      </h1>
      {selectedBlog?.body.map((p) => (
        <p
          key={p.id}
          className="font-serif text-lg mb-8 font-thin text-slate-600"
        >
          {p?.paragraph}
        </p>
      ))}
      {/* TODO: add profile image at bottom */}
    </div>
  );
};

export default BlogPage;
