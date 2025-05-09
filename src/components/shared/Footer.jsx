import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link to="/">
              <img src="/images/logo1.png" width="200px" alt="Enviation Logo" />
            </Link>
            <p className="mt-2 small text-white">
              Enviation Technologies is an organisation offering novel innovative
              concepts to promote environmental friendliness & energy-efficient
              systems.
            </p>
            <p className="mt-2 small text-white">
              Enviation Technologies LLP, 9-2-145, Station Area, Near Tikotokar
              Petrol Bunk, Koppal-583231, Karnataka, India.
            </p>
          </div>
          <div className="col-md-2 mb-4">
            <h6 className="text-white">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <i className="bi bi-house-door"></i>
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li>
                <i className="bi bi-info-circle"></i>
                <Link to="/About" className="text-light text-decoration-none">About Us</Link>
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
              </li>
              <li>
                <i className="bi bi-send"></i>
                <Link to="/" className="text-light text-decoration-none">Submit Query</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="text-white">Services</h6>
            <ul className="list-unstyled small">
              <li>
              <i className="bi bi-info-circle"></i>
                <Link to="/" className="text-light text-decoration-none">Legal Advice</Link>
              </li>
              <li>
                <i className="bi bi-headset"></i>
                <Link to="/" className="text-light text-decoration-none">Support Services</Link>
              </li>
              <li>
                <i className="bi bi-file-earmark-text"></i>
                <Link to="/" className="text-light text-decoration-none">Documentation Help</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="text-white">Connect With Us</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-youtube"></i></a>
              <a href="#" className="text-light"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <hr className="border-secondary mt-4" />
        <div className="d-flex justify-content-between align-items-center flex-wrap mt-3 text-white">
          <div className="small text-muted text-center text-md-start mb-2 mb-md-0">
            &copy; 2025 Enviation. All Rights Reserved.
          </div>
          <a href="#" className="btn btn-outline-light btn-sm rounded-pill ms-auto">
            <i className="bi bi-arrow-up"></i> Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
