import { useEffect } from "react";
import "./Navbar.css";
import { useCursor } from "../../contexts/Cursor";

const Navbar = () => {
  const { handleMouseEnterAnimation } = useCursor();
  useEffect(() => {
    handleMouseEnterAnimation();
  }, []);
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div>
          <a href="#">MSM</a>
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
