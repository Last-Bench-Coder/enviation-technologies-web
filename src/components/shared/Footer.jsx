import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <a href="/home">
              <img src="/images/logo1.png" width="200px" alt="Enviation Logo" />
            </a>
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
                <a href="/" className="text-light text-decoration-none">Home</a>
              </li>
              <li>
                <i className="bi bi-info-circle"></i>
                <a href="/About" className="text-light text-decoration-none">About Us</a>
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                <a href="/contact" className="text-light text-decoration-none">Contact</a>
              </li>
              <li>
                <i className="bi bi-send"></i>
                <a href="/Home/SubmitQuery" className="text-light text-decoration-none">Submit Query</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="text-white">Services</h6>
            <ul className="list-unstyled small">
              <li>
              <i className="bi bi-info-circle"></i>
                <a href="#" className="text-light text-decoration-none">Legal Advice</a>
              </li>
              <li>
                <i className="bi bi-headset"></i>
                <a href="#" className="text-light text-decoration-none">Support Services</a>
              </li>
              <li>
                <i className="bi bi-file-earmark-text"></i>
                <a href="#" className="text-light text-decoration-none">Documentation Help</a>
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
