import React from "react";
import "./HomeCategories.css";

const HomeCategories = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="section-title">Enviation Technologies LLP</h1>
            <hr className="styled-hr" />
            <p className="section-subtitle">Innovating for a better tomorrow</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow custom-card">
              <div className="card-body text-center">
                <div className="card-icon mb-3">
                  <i className="fa fa-eye"></i>
                </div>
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text">
                  To become a leading provider of innovative solutions tailored to customer needs through a committed team of
                  research-driven engineers, while enhancing the environmental friendliness of our offerings — because a better
                  environment means a better life.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow custom-card">
              <div className="card-body text-center">
                <div className="card-icon mb-3">
                  <i className="fa fa-bullseye"></i>
                </div>
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">
                  To achieve our vision by consistently delivering cutting-edge solutions that improve performance, quality, and service,
                  addressing customer challenges across various industrial applications and environmental protection areas.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow custom-card">
              <div className="card-body text-center">
                <div className="card-icon mb-3">
                  <i className="fa fa-tasks"></i>
                </div>
                <h5 className="card-title">Our Objectives</h5>
                <p className="card-text">
                  To implement forward-thinking and energy-efficient concepts that promote eco-friendly systems, focusing on developing innovative
                  technologies to build a more sustainable and environmentally conscious future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
