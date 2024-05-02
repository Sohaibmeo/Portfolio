import {motion} from "framer-motion";
import React, { useCallback, useState } from "react";
import Face from "../../components/moving-face/Face";
import "./Home.css";
import CursorAnimation from "../../components/cursor-animation/CursorAnimation";

const Home: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: any) => {
    const posX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
    const posY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
    console.log("working");
    setPosition({ x: posX, y: posY });
    
  }, []);

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);
  const handleMouseLeave = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <motion.section
    onViewportEnter={handleMouseEnter}
    onViewportLeave={handleMouseLeave}
    viewport={{ amount: 0.5 }}
    className="section home-container">
      <CursorAnimation size={200} show={true} backgroundColor="black" />
      {/* <div className="behind-face-image"><h1>Behind My Image</h1></div> */}
      <div className="home-buttons home-contact">Contact Me</div>
      <div>
        <Face position={position}/>
      </div>
      <div className="home-buttons home-work">My Work</div>
    </motion.section>
  );
};

export default Home;
