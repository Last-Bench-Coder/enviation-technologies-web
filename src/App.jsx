import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/shared/Header';
import Home from './components/Home';
import Footer from './components/shared/Footer';
import About from './components/About';
import OurProducts from './components/OurProducts';
import ContactUs from './components/ContactUs';
import ScrollToTop from './components/shared/ScrollToTop'; // ✅ add this

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ ensures scroll resets on route change */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<OurProducts />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
