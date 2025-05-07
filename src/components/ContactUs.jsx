import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section py-5 mt-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">We’d love to hear from you. Reach out with your questions or inquiries.</p>
        </div>

        <div className="row">
          {/* Contact Info */}
          <div className="col-md-5 mb-4">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="mb-4 text-primary">Contact Information</h4>
              <p><strong>Enviation Technologies LLP</strong></p>
              <p><i className="bi bi-geo-alt-fill me-2 text-secondary"></i>9-2-145, Station Area, Near Tikotokar Petrol Bunk, Koppal-583231, Karnataka, India</p>
              <p><i className="bi bi-envelope-fill me-2 text-secondary"></i>support@enviation.com</p>
              <p><i className="bi bi-clock-fill me-2 text-secondary"></i>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <div className="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933131.649825757!2d72.47272061022593!3d15.70086446848975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb834b5c2eb5a25%3A0x5a77393246f9b36a!2sEnviation%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1746502556177!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7 mb-4">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="mb-4 text-primary">Send Us a Message</h4>
              <form method="post" action="/Home/ContactSubmit">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input type="text" name="Name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="Email" className="form-control" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="text" name="Subject" className="form-control" placeholder="Subject" required />
                </div>
                <div className="mb-3">
                  <textarea name="Message" rows="6" className="form-control" placeholder="Your Message" required></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
