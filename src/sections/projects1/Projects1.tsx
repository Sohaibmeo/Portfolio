import "./Projects1.css";
import getProjectData from "../../utils/projectData";
import ProjectCard from "../../components/project/Project";

const Projects1 = () => {
  const projectData = getProjectData();
  return (
    <section id="projects" className="section project-wrapper">
      {projectData.map((project, index) => {
        return <ProjectCard project={project} counter={index+1} key={index} />;
      })}
    </section>
  );
};

export default Projects1;
