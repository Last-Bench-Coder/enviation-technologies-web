import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomeProduct.css";

const HomeProduct = () => {
  return (
    <section className="product-section">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-title">Our Product</h1>
          <hr className="styled-hr" />
          <p className="section-subtitle">
            Efficient solutions to meet modern emission standards in combustion systems.
          </p>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src="/images/POLLUTION-1024x682.jpg" alt="IRRA Cyclone System" />
        </div>
        <div className="product-content">
          <h3>IRRA Cyclone System</h3>
          <p>
            Designed for biomass, coal boilers, heating applications, and waste incinerators – this
            system targets dust and particulate matter (PM) in high-temperature exhaust. Traditional
            dedusters struggle to meet emission limits ≤ 50 mg/Nm³, but the IRRA Cyclone System
            excels in efficiency and compliance with stringent regulations.
          </p>
          <Link to="/product" className="read-more-btn">Read More</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
