import "./home.css";
import "../common.css";
// import Video from "../../assets/video.mp4";

const Home = () => {
  return (
    <section id="home" className="section home-wrapper">
      {/* <video autoPlay muted loop id="video" className="home-video">
        <source src={Video} type="video/mp4" />
      </video> */}
      {/* <img src="https://images.pexels.com/photos/2438212/pexels-photo-2438212.jpeg" className="home-video" alt="" /> */}
      <div className="home-image" />
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