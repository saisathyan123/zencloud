import React from "react";
import Navbar from "../components/Navbar";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-header">Contact Us</h1>
        <p className="contact-text">
          We would love to hear from you! Feel free to reach out to us with any
          questions, concerns, or feedback.
        </p>
        <div className="contact-details">
          <p>Email: info@yogaplatform.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Yoga Street, Zen City</p>
        </div>
        <div className="contact-form">
          <h2>Send us a Message</h2>
          {/* Include your contact form component here */}
          {/* Example: <ContactForm /> */}
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
