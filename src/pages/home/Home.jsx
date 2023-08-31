import BlogSlider from "../../components/blogSlider/BlogSlider";
import "./home.css";

const Home = () => {
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
      <div className="home-page__blog-container h-screen">
        <h2 className="font-bold text-4xl">Blogs</h2>
        <BlogSlider />
      </div>
    </>
  );
};

export default Home;
