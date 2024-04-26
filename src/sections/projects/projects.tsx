import "./projects.css";
import "../common.css";
import getProjectData from "../../utils/projectData";

const Projects = () => {
  const projectData = getProjectData();
  return (
    <section id="projects" className="section project-wrapper">
      {projectData.map((project, index) => {
        return (
          <div className="project-card" key={index}>
            <div className="project-card-header">
              <p className="project-start-date">{project.startDate}</p>
              <h3 className="project-card-title">{project.title}</h3>
            </div>
            <div className="project-card-body">
              <p className="project-card-description">
                {project.description}
              </p>
              <div className="project-card-footer">
                <a
                  href={project.link}
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
