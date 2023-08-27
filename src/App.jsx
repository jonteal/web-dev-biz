import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./pages/navigation/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";

import "./App.css";
import Services from "./pages/services/Services";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
