import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div className="about-sec">
      <div className="logo-box">
        <img src="/images/logo1.png" alt="Enviation Logo" />
      </div>
      <div className="text-box">
        <h2>ABOUT US</h2>
        <p>
          Enviation Technologies is an organisation offering novel innovative concepts to promote
          environmental friendliness & energy efficient system. Provides advanced air pollution
          control system, service & innovative solutions that cost effectively eliminate and minimize
          a wide spectrum of air pollutants and regulated emissions from virtually all types of
          sources and applications.
        </p>
        <Link to="/contact" className="read-more-btn">Read More</Link>
      </div>
    </div>
  );
};

export default HomeAbout;
