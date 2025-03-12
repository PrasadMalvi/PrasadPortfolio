import React, { useRef } from "react";
import "./Contact.css"; // Import the new CSS file

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const scriptURL = "YOUR_GOOGLE_SHEET_SCRIPT_URL";

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        document.getElementById("msg").innerHTML =
          "Prasad will get back to you!";
        setTimeout(() => {
          document.getElementById("msg").innerHTML = "";
        }, 3000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="title">Get in Touch</h1>

        <div className="contact-wrapper">
          {/* Left Section - Contact Info */}
          <div className="contact-left">
            <p>
              <i className="fa-solid fa-paper-plane icon1"></i> Prasadmalvi23@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-square-phone icon1"></i> 7996592596
            </p>

            {/* Social Icons */}
            <div className="social-icons1">
              <a href="https://www.facebook.com/prasad.malvi.50/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://github.com/PrasadMalvi">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/malviprasad/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/prasad-malvi/?originalSubdomain=in">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>

            {/* Download CV Button */}
            <a href="PrasadMalviSDE.pdf" download className="download-cv">
              Download CV
            </a>
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-right">
            <form ref={formRef} name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="5" placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
