
import "./About.css";
import Skills from "../../components/skills/Skill";

const About = () => {
  return (
    <section id="about" className="about-container section">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="text">
          Resourceful Software Engineer with in-depth knowledge of Front End Web
          Development. Experience handling complex HTML and CSS coding,
          Javascript And ReactJS design and extensions to meet organization's
          front-facing internet needs. Detail-oriented collaboration with others
          to define project expectations and demand. Hands-on testing and
          debugging to address inconsistencies and maintain performance
          thresholds.
        </p>
        <h1 className="skills">Skills</h1>
        <Skills width="40px"/>
      </div>
      <div className="about-image-container">
        <div className="bg-image" />
        <div className="fg-image" />
      </div>
    </section>
  );
}

export default About;
