import { getSingleProjectData } from "../../utils/getSkillData";
import Git from "../../assets/code-icons/git.svg";
import "./projectCard.css";

type Project = {
  startDate: Date;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github: string;
  background: string;
};

const ProjectCard = ({
  project,
  counter,
}: {
  project: Project;
  counter: number;
}) => {
  return (
    <div
      className="project-card"
      onClick={() => window.open(project.link, "_blank")}
      style={{backgroundImage: `url(${project.background})`}}
    >
      <h1 className="counter">{counter}</h1>
      <div className="project-card-footer">
        <p className="project-start-date">
          {project.startDate.toLocaleDateString()}
        </p>
        <h1 className="project-card-title">{project.title}</h1>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-links">
          <a href={project.github} className="project-link" target="_blank">
            <img
              src={Git}
              width={"35px"}
              style={{ aspectRatio: 1 }}
              alt="github"
            />
            <p>Github</p>
          </a>
        </div>
      </div>
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
    </div>
  );
};

export default ProjectCard;
