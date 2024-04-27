import "./contact.css";
import "../common.css";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>
            Feel free to reach out to me at{" "}
            <a
              href="mailto:sohaibmayo12@gmail.com"
              className="email-link"
            >
              [email]
            </a>
          </p>
          <p>
            or connect with me on{" "}
            <a href="[linkedin]" className="linkedin-link">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
