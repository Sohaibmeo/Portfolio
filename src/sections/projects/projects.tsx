import "./projects.css";
import "../common.css";
import getProjectData from "../../utils/projectData";
import ProjectCard from "../../components/project-card/projectCard";

const Projects = () => {
  const projectData = getProjectData();
  return (
    <section id="projects" className="section project-wrapper">
      {projectData.map((project, index) => {
        return <ProjectCard project={project} counter={index+1} key={index} />;
      })}
    </section>
  );
};

export default Projects;
