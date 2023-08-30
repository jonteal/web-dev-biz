import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import BlogPage from "./pages/blogPage/BlogPage";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Navigation from "./pages/navigation/Navigation";
import NotFound from "./pages/notFound/NotFound";
import Services from "./pages/services/Services";
// import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Navigation />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:id" element={<BlogPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
