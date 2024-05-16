import { motion, useScroll } from "framer-motion";
import React, { useCallback, useRef, useState } from "react";
import Face from "../../components/moving-face/Face";
import "./Home.css";

const Home: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
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
      onViewportEnter={handleMouseEnter}
      onViewportLeave={handleMouseLeave}
      viewport={{ amount: 0.1 }}
    >
      <div className="section home-face-container">
        <Face position={position} scrollYProgress={scrollYProgress} />
      </div>
      <motion.section className="section hero-container">
        <div className="home-buttons home-contact">
          <h3>Contact Me</h3>
        </div>
        <div className="home-buttons home-work">
          <h3>My Work</h3>
        </div>
      </motion.section>
      <section className="about-container" ref={ref} />
      <br id="about" />
    </motion.div>
  );
};

export default Home;
