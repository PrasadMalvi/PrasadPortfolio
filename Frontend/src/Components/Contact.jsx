import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5050/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMsg("Prasad will get back to you!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setMsg(result.error || "Failed to send message.");
      }

      setTimeout(() => setMsg(""), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setMsg("Server error. Please try again later.");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="title">Get in Touch</h1>

        <div className="contact-wrapper">
          {/* Left Section - Contact Info */}
          <div className="contact-left">
            <p><i className="fa-solid fa-paper-plane icon1"></i> Prasadmalvi23@gmail.com</p>
            <p><i className="fa-solid fa-square-phone icon1"></i> 7996592596</p>

            {/* Social Icons */}
            <div className="social-icons1">
              <a href="https://www.facebook.com/prasad.malvi.50/"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://github.com/PrasadMalvi"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/malviprasad/"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/prasad-malvi"><i className="fa-brands fa-linkedin"></i></a>
            </div>

            {/* Download CV Button */}
            <a href="PrasadAMalviSDE1.pdf" download className="download-cv">Download CV</a>
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
              <button type="submit">Send Message</button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
