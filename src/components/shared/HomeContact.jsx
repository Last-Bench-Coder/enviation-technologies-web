import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomeContact.css";

const HomeContact = () => {
  return (
    <div className="section-container">
      <h2 className="section-heading">
        Know More About Our Products and Services. Get in Touch.
      </h2>
      <Link to="/contact" className="contact-button">
        CONTACT US
      </Link>
    </div>
  );
};

export default HomeContact;
