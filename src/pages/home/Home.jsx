import { useState, useEffect } from "react";
import Testimonials from "../../components/testimonials/Testimonials";
import ContactSection from "../../components/contactSection/ContactSection";
import ServicesSection from "../../components/servicesSection/ServicesSection";
// import BlogSection from "../../components/blogSection/BlogSection";
import MainLandingSection from "../../components/mainLandingSection/MainLandingSection";
import FadeInSection from "../../components/fadeInSection/FadeInSection";

import "./home.css";

const Home = () => {
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
    <>
      <FadeInSection>
        <MainLandingSection />
      </FadeInSection>

      <FadeInSection>
        <ServicesSection />
      </FadeInSection>

      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      {/* <BlogSection blogs={blogs} /> */}

      <FadeInSection>
        <ContactSection />
      </FadeInSection>
    </>
  );
};

export default Home;
