import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [buttonClass, setButtonClass] = useState(""); // For status colors

  useEffect(() => {
    setTimeout(() => setIsFormVisible(true), 500);
    setTimeout(() => setIsInfoVisible(true), 800);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const resetButton = () => {
    setButtonText("Send");
    setButtonClass("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending...");
    setButtonClass(""); // Reset button color
    setTimeout(() => {
      setButtonText("Not Sent");
      setButtonClass("error"); // Red button
    }, 2000);
    
    // try {
    //   await axios.post("http://localhost:5000/send-email", formData);

    //   setTimeout(() => {
    //     setButtonText("Sent");
    //     setButtonClass("success"); // Green button
    //     resetForm();
    //   }, 2000);

    // } catch (error) {
    //   setTimeout(() => {
    //     setButtonText("Not Sent");
    //     setButtonClass("error"); // Red button
    //   }, 2000);
    // }

    setTimeout(() => {
      setIsSubmitting(false);
      resetButton();
    }, 5000); // Reset button after 3 seconds (total wait: 2s + 3s)
  };

  return (
    <section className="contact">
      <div className="contactHeader">
        <h2>Let's Connect & Work Together</h2>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <form className={`contact-form ${isFormVisible ? "show" : ""}`} onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <label>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input-field">
              <label>Company's Name</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} required />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-field">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>
          <div className="input-field">
            <label>Message</label>
            <div className="message">
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className={buttonClass}>
            {buttonText}
          </button>
        </form>

        {/* Contact Info */}
        <div className={`contact-info ${isInfoVisible ? "show" : ""}`}>
          <p>Phone Number</p>
          <div className="phone">
            <p>737-235-6180</p>
          </div>
          <br />
          <p>Email</p>
          <div className="email">
            <p>contact@tradewaysco.com</p>
          </div>
          <br />
          <p>Office Location</p>
          <div className="office">
            <p>Tomball, Texas 77375</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
