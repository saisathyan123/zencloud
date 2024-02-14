import React from "react";
import Navbar from "../components/Navbar";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-header">Welcome to Our Yoga Community</h1>
        <p className="about-text">
          Embrace a journey of self-discovery and well-being in our vibrant yoga
          community. At our platform, we're committed to providing a space where
          individuals of all levels can explore the transformative benefits of
          yoga.
        </p>
        <p className="about-text">
          Our mission is to cultivate a supportive environment for you to embark
          on a path of mindfulness and balance. Whether you're a novice or an
          experienced practitioner, our diverse range of programs caters to your
          unique needs and aspirations.
        </p>
        <p className="about-text">
          Join us in building a community that cherishes the principles of
          wellness, mindfulness, and unity. Your journey towards a healthier and
          more fulfilling life begins here. Namaste!
        </p>
      </div>
    </>
  );
};

export default AboutUsPage;
