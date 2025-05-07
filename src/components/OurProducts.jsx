import React from "react";
import "./OurProducts.css";

const OurProducts = () => {
  return (
    <section className="product-page py-5 bg-light">
      <div className="container">

        {/* Title Section */}
        <div className="text-center mb-5">
          <h1 className="product-title">IRRA Cyclone System</h1>
          <p className="product-subtitle">
            Advanced Emission Control for Boilers, Incinerators, and Industrial Applications
          </p>
        </div>

        {/* Overview Section */}
        <div className="card mb-4 p-4 shadow-sm">
          <h2 className="section-heading">Overview</h2>
          <p><strong>Target Applications:</strong> Biomass boilers, coal boilers, heating applications, and waste incinerators.</p>
          <p>
            Our IRRA Cyclone system provides highly efficient particle separation without the complexity of ESPs or Bagfilters.
            It operates across a wide temperature range with minimal maintenance.
          </p>
          <img src="/images/boiler_plant.png" alt="Boiler Plant" className="img-fluid mt-3 rounded" />
        </div>

        {/* Product Schematic Section */}
        <div className="card mb-4 p-4 shadow-sm">
          <h2 className="section-heading">Product Schematic</h2>
          <div className="row text-center">
            <div className="col-md-6 mb-3">
              <img src="/images/schematic1.png" alt="Particles > 10µ" className="img-fluid rounded" />
              <p className="mt-2">Particles &gt; 10µ</p>
            </div>
            <div className="col-md-6 mb-3">
              <img src="/images/schematic2.png" alt="Particles > 5µ" className="img-fluid rounded" />
              <p className="mt-2">Particles &gt; 5µ</p>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="card mb-4 p-4 shadow-sm">
          <h2 className="section-heading">Applications</h2>
          <div className="row">
            <div className="col-md-6 text-center">
              <img src="/images/industry1.png" className="img-fluid mb-3 rounded" alt="Industry 1" />
              <ul className="text-start ps-4">
                <li>Coal & biomass boilers</li>
                <li>Steel & ferro alloys</li>
                <li>Calcination</li>
                <li>Glass & ceramic processes</li>
                <li>Thermal dryer de-dusting</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img src="/images/industry2.png" className="img-fluid mb-3 rounded" alt="Industry 2" />
              <ul className="text-start ps-4">
                <li>Pharmaceuticals</li>
                <li>Chemicals & fertilizers</li>
                <li>Food ingredients</li>
                <li>Mineral processing</li>
                <li>Powder recovery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emission & Recovery Section */}
        <div className="card mb-4 p-4 shadow-sm">
          <h2 className="section-heading">Emission Control & Powder Recovery</h2>
          
          <h4 className="mt-4">Emission Control Device</h4>
          <p>
            Our multi-inlet particle agglomeration cyclone helps reduce PM emissions to well below environmental limits —
            all without using filters or ESPs.
          </p>
          <img src="/images/agglomerator_diagram.png" className="img-fluid my-3 rounded" alt="Emission Control Diagram" />

          <h4 className="mt-4">Powder Product Recovery</h4>
          <p>
            In chemical and pharmaceutical lines, the cyclone system improves efficiency and minimizes product losses by
            capturing fine particles during drying.
          </p>
          <img src="/images/process_recovery.png" className="img-fluid my-3 rounded" alt="Powder Recovery Diagram" />
        </div>

        {/* Comparison Section */}
        <div className="card mb-4 p-4 shadow-sm">
          <h2 className="section-heading">Technology Comparison</h2>
          <p className="product-subtitle">
            IRRA Cyclone vs. Multicyclones, Bag Filters, ESPs, and Wet Scrubbers
          </p>
          <img src="/images/comparison_table.png" className="img-fluid rounded" alt="Comparison Table" />
        </div>

        {/* Key Features Section */}
        <div className="card mb-5 p-4 shadow-sm">
          <h2 className="section-heading">Key Features</h2>
          <ul className="text-start ps-4">
            <li>Low emissions: 30–50 mg/Nm³</li>
            <li>Supports customized arrangements (single or parallel)</li>
            <li>Low pressure drop (&lt;100 mmWC)</li>
            <li>Temperature independent</li>
            <li>No moving parts</li>
            <li>Very low operating and maintenance costs</li>
            <li>High uptime with minimal downtime</li>
            <li>Compact, robust design</li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <h3>Know More</h3>
          <p>Get in touch with us for a demo or a detailed proposal.</p>
          <a href="~/ContactUs" className="btn btn-primary btn-lg">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
