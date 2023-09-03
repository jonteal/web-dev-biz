import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import BlogPage from "./pages/blogPage/BlogPage";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Navigation from "./pages/navigation/Navigation";
import NotFound from "./pages/notFound/NotFound";
import Services from "./pages/services/Services";
import Websites from "./pages/websites/Websites";
// import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.css";
import Advertising from "./pages/advertising/Advertising";
import Blogging from "./pages/blogging/Blogging";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blogs/:id" element={<BlogPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="services/websites" element={<Websites />} />
        <Route path="services/advertising" element={<Advertising />} />
        <Route path="services/blogging" element={<Blogging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
