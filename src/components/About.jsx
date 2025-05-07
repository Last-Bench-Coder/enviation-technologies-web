import React from "react";
import "./About.css";  // Make sure to import the CSS file

const About = () => {
  return (
    <section className="about-us-container">
      <div className="container">
        <h1 className="main-title text-center">Enviation Technologies LLP</h1>
        <p className="sub-title text-center mb-5">Innovating for a Sustainable Tomorrow</p>

        {/* Vision Section */}
        <div className="row section align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Our Vision</h2>
            <p className="section-text">
              To be a leader in providing innovative solutions to our customers' needs, with a committed team of research-inclined engineers, working towards improving the environmental friendliness of our solutions. Because a better environment means a better life.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://enviation.com/wp-content/uploads/2024/11/Yellow-Lady.png"
              alt="Our Vision"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="row section align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              Strive to attain our vision by continually offering innovative solutions, improving performance, quality, and service to solve our customers' problems across various industrial applications and pollution control systems.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://enviation.com/wp-content/uploads/2024/11/Grey-Man.png"
              alt="Our Mission"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>

        {/* Objectives Section */}
        <div className="row section align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Our Objectives</h2>
            <p className="section-text">
              To implement novel and innovative concepts that promote environmentally friendly and energy-efficient systems. We focus on providing sustainable solutions for creating a better tomorrow’s environment.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://enviation.com/wp-content/uploads/2024/11/Pink-Lady.png"
              alt="Our Objectives"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center">
          <a href="/contact" className="btn btn-primary btn-lg mt-4">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
