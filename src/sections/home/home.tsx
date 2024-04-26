import "./home.css";
import "../common.css";

const Home = () => {
  return (
    <section id="home" className="section home-wrapper">
      <div className="home-content">
        <h1 className="home-title">Hi, <span className="outer-title"><span className="inner-title">I'm Sohaib Meo</span></span></h1>
        <p className="text">
          I'm a full stack web developer with experience in building web
          applications using modern technologies like React, Next, Node, Nest.
        </p>
        <button className="cta" onClick={()=>window.location.hash = "projects"}>My Projects</button>
      </div>
    </section>
  );
}

export default Home;