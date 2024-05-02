import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div>
          <a href="#">Sohaib Meo</a>
        </div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
