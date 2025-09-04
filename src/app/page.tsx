import React from "react";
import Home from "./components/Home/Home";
import Hero from "./components/Home/Hero/Hero";
import About from "./components/Home/About/About";
import Services from "./components/Home/Services/Services";
import Skills from "./components/Home/Skills/Skills";
import Reviews from "./components/Home/Reviews/Reviews";
import Blog from "./components/Home/Blog/Blog";
import Contact from "./components/Home/Contact/Contact";
import Footer from "./components/Home/Footer/Footer";

const page = () => {
  return (
    <div>
      <Home /> {/* Assuming Home is imported from the correct path */}
      <Hero />
      <About />
      <Services />
      {/* <Project /> */}
      <Skills />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
