import { motion, useScroll } from "framer-motion";
import React, { useCallback, useRef, useState } from "react";
import Face from "../../components/moving-face/Face";
import "./Home.css";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Home: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const ref = useRef(null);
  const onViewPortEnter = () => {
    console.log("In Viewport");
    setHidden(false);
  };
  const onViewPortLeave = () => {
    console.log("Out of Viewport");
    setHidden(true);
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const handleMouseMove = useCallback((event: any) => {
    const posX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
    const posY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
    setPosition({ x: posX, y: posY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    console.log("Mouse Enter");
    document.addEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);
  const handleMouseLeave = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <motion.div
      className="home-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onViewportEnter={onViewPortEnter}
      onViewportLeave={onViewPortLeave}
      viewport={{ amount: 0.1 }}
    >
      <div className={`section home-face-container ${hidden ? "hidden" : ""}`}>
        <Face position={position} scrollYProgress={scrollYProgress} />
      </div>
      <motion.section id="home" className="section hero-container">
        <div className="home-buttons home-contact">
          <h3>Contact Me</h3>
        </div>
        <div className="home-buttons home-work">
          <h3>My Work</h3>
        </div>
      </motion.section>
      <section className="about-container section" id="about" ref={ref} />
    </motion.div>
  );
};

export default Home;
