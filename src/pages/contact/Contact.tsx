import { useState } from "react";
import getHeartBeatSvgPath from "../../utils/data/getHeartBeatSvgPath";
import getHeartSvgPath from "../../utils/data/getHeartSvgPath";
import "./Contact.css";
import Linkedin from "../../assets/social/linkedin.svg";
import Instagram from "../../assets/social/instagram.svg";
import Whatsapp from "../../assets/social/whatsapp.svg";
import Email from "../../assets/social/email.svg";

const Contact = () => {
  const [hover, setHover] = useState(false);
  return (
    <section id="contact" className="section contact-container">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/rodrigo-ramos-1b1b7b1b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/rodrigo_ramos_/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511988888888"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511988888888"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Email} alt="Email" />
        </a>
      </div>
      <div className={`heart ${hover ? "faster" : ""}`}>
        <svg viewBox="0 0 2454 3645">
          <path d={getHeartSvgPath()} />
        </svg>
      </div>
      <div className={`heart-beat ${hover ? "rate-faster" : ""}`}>
        <svg viewBox="0 0 1689.000000 430.000000">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "grey", stopOpacity: 0.3 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "white", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "grey", stopOpacity: 0.3 }}
              />
            </linearGradient>
          </defs>
          <g transform="translate(0.000000,430.000000) scale(0.100000,-0.100000)">
            <path d={getHeartBeatSvgPath()} id="path" />
          </g>
        </svg>
      </div>
      <div className="contact-form">
        <h2>Get in touch</h2>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
