import { useEffect } from "react";
import "./Navbar.css";
import { useCursor } from "../../contexts/Cursor";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { handleMouseEnterAnimation } = useCursor();
  useEffect(() => {
    handleMouseEnterAnimation();
  }, []);
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div>
          <Link to="/">MSM</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
