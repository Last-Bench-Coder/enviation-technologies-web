import React from "react";
import "./Videos.css";

const Videos = () => {
  return (
    <section className="hero-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/videos/my.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1 className="display-5 fw-bold">Welcome to Enviation Technologies</h1>
        <p className="lead">Innovating for a greener, cleaner, and sustainable tomorrow.</p>
        <a href="/about" className="btn btn-success mt-3 px-4 py-2 rounded-pill">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Videos;
