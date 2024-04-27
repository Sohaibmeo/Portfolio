import "./projects.css";
import "../common.css";
import Git from "../../assets/code-icons/git.svg";
import getProjectData from "../../utils/projectData";
import { getSingleProjectData } from "../../utils/getSkillData";

const Projects = () => {
  const projectData = getProjectData();
  return (
    <section id="projects" className="section project-wrapper">
      {projectData.map((project, index) => {
        return (
          <div className="project-card" key={index}>
            <div className="project-card-header">
              <p className="project-start-date">{project.startDate.toLocaleDateString()}</p>
              <h3 className="project-card-title">{project.title}</h3>
            </div>
            <div className="project-card-body">
              <p className="project-card-description">{project.description}</p>
              <div className="project-card-tech-stack">
                {project.techStack.map((tech, index) => {
                  const skill = getSingleProjectData(tech);
                  return (
                    <a href={skill?.link} target="_blank" key={index}>
                      <img
                        src={skill?.img}
                        width={"30px"}
                        className="icon-image"
                        alt={skill?.alt}
                      />
                    </a>
                  );
                })}
              </div>
              <div className="project-card-footer">
                <div>
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                  >
                    <button>View Project</button>
                  </a>
                </div>
                <div>
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                  >
                    <img
                      src={Git}
                      width={"35px"}
                      style={{ aspectRatio: 1 }}
                      alt="github"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
