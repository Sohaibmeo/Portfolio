import "./OldHome.css";
import "../common.css";
// import Video from "../../assets/video.mp4";

const OldHome = () => {
  return (
    <section id="home2" className="section home2-wrapper">
      {/* <video autoPlay muted loop id="video" className="home2-video">
        <source src={Video} type="video/mp4" />
      </video> */}
      {/* <img src="https://images.pexels.com/photos/2438212/pexels-photo-2438212.jpeg" className="home2-video" alt="" /> */}
      {/* <div className="home2-image" /> */}
      <div className="home2-content">
        <h1 className="home2-title">Hi, <span className="outer-title"><span className="inner-title">I'm Sohaib Meo</span></span></h1>
        <p className="text">
          I'm a full stack web developer with experience in building web
          applications using modern technologies like React, Next, Node, Nest.
        </p>
        <button className="cta" onClick={()=>window.location.hash = "projects"}>My Projects</button>
      </div>
    </section>
  );
}

export default OldHome;
