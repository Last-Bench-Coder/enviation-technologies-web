import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation(); // ✅ listen to route change

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    const toggleMenu = () => {
      menu.classList.toggle("active");
    };

    if (hamburger) {
      hamburger.addEventListener("click", toggleMenu);
    }

    // ✅ Close menu on route change
    menu.classList.remove("active");

    return () => {
      if (hamburger) {
        hamburger.removeEventListener("click", toggleMenu);
      }
    };
  }, [location]); // re-run on route change

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/images/logo1.png" width="200px" alt="Enviation Logo" />
        </Link>
      </div>
      <div className="hamburger" id="hamburger">
        <i className="fas fa-bars"></i>
      </div>
      <div className="menu" id="menu">
        <Link to="/"><i className="fas fa-home"></i> Home</Link>
        <Link to="/about"><i className="fas fa-info-circle"></i> About Us</Link>
        <Link to="/product"><i className="fas fa-box-open"></i> Product</Link>
        <Link to="/contact"><i className="fas fa-envelope"></i> Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
