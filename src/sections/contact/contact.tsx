import "./contact.css";
import "../common.css";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";

const Contact = () => {
  return (
    <section id="contact" className="section contact-wrapper">
      <div>
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper">
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
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
