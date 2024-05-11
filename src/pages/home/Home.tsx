import { motion, useScroll, useTransform } from "framer-motion";
import React, { useCallback, useRef, useState } from "react";
import Face from "../../components/moving-face/Face";
import "./Home.css";
import { getPipe1Path, getPipe2Path } from "../../utils/data/getPipePath";

const Home: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const strokeDashoffset = useTransform(scrollYProgress, [0,0.5, 1], [-700,-700, 0]);

  const handleMouseMove = useCallback((event: any) => {
    const posX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
    const posY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
    setPosition({ x: posX, y: posY });
  }, []);

  const handleMouseEnter = useCallback(() => {
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
      viewport={{ amount: 0.5 }}
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
      <motion.section className="section about-container" ref={ref}>
        <motion.svg
          viewBox="83.486 233.806 332.864 206.963"
          className="blood-pipes-left pipe-1"
          initial={{ strokeDashoffset: -700, strokeDasharray: 700 }}
          style={{ strokeDashoffset }}
        >
          <motion.path d={getPipe1Path()} />
        </motion.svg>
        <motion.svg
          viewBox="83.486 230.87 315.864 460.299"
          className="blood-pipes-left pipe-2"
          initial={{ strokeDashoffset: -700, strokeDasharray: 700 }}
          style={{ strokeDashoffset }}
        >
          <motion.path d={getPipe2Path()} />
        </motion.svg>
        <motion.svg
          viewBox="83.486 233.806 332.864 206.963"
          className="blood-pipes-right pipe-1"
          initial={{ strokeDashoffset: -700, strokeDasharray: 700 }}
          style={{ strokeDashoffset }}
        >
          <motion.path d={getPipe1Path()} />
        </motion.svg>
        <motion.svg
          viewBox="83.486 230.87 315.864 460.299"
          className="blood-pipes-right pipe-2"
          initial={{ strokeDashoffset: -700, strokeDasharray: 700 }}
          style={{ strokeDashoffset }}
        >
          <motion.path d={getPipe2Path()} />
        </motion.svg>
      </motion.section>
    </motion.div>
  );
};

export default Home;
