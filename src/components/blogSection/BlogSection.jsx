import BlogSlider from "../blogSlider/BlogSlider";

const BlogSection = ({ blogs }) => {
  return (
    <div className="home-page__blog-container h-screen">
      <h2 className="font-bold text-4xl">Blogs</h2>
      <BlogSlider blogs={blogs} />
    </div>
  );
};

export default BlogSection;
