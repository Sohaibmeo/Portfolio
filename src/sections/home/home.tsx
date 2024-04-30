import React from "react";
import "./Home.css";
import Face from "../../components/moving-face/Face";

const Home: React.FC = () => {
  return (
    <section className="section home-wrapper">
      <div className="home-buttons home-contact">Contact Me</div>
      <div>
        <Face />
      </div>
      <div className="home-buttons home-work">My Work</div>
    </section>
  );
};

export default Home;
