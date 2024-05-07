import ProjectCard from "../../components/card/ProjectCard";
import ScrollProgress from "../../components/scroll-progress/ScrollProgress";
import getProjectData from "../../utils/projectData";
import "./Projects.css";

const Projects = () => {
  const projectsData = getProjectData();
  const leftText: string = "Projects";
  const leftTextCharacters = leftText.split("");
  return (
    <section className="project-container">
      <ScrollProgress />
      <div className="project-sticky-heading">
        <h1 id="project-heading">
          {leftTextCharacters.map(
            (text: string, index: number) => (
              <span key={index} className="heading-char">{text}</span>
            ),
          )}
        </h1>
      </div>
      <div className="project-section">
        {projectsData.map((project, index) => (
          <div className="project-section-content">
            <h1>{index + 1}</h1>
            <ProjectCard key={index} {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
