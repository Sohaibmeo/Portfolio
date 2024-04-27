import "./contact.css";
import "../common.css";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section id="contact" className="section contact-wrapper">
      <div>
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="social-links-wrapper">
          <a
            href="https://www.linkedin.com/in/sohaibfinale/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img
              src={Linkedin}
              alt="linkedin"
              width={"30px"}
              style={{ aspectRatio: 1 }}
            />
          </a>
          <a
            href="https://www.instagram.com/sohaib_mao/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img
              src={Instagram}
              alt="instagram"
              width={"30px"}
              style={{ aspectRatio: 1 }}
            />
          </a>
          <a
            href="
            https://wa.link/h1wwvu"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <img
              src={Whatsapp}
              alt="whatsapp"
              width={"30px"}
              style={{ aspectRatio: 1 }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
