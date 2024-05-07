import { getSingleProjectData } from "../../utils/getSkillData";
import { ProjectCardProps } from "../../utils/types/project";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  background,
  link,
  github,
  techStack,
  tag,
  startDate,
}: ProjectCardProps) => {
  return (
    <div
      className="project-card"
      style={{
        background: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="project-card-image"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="project-card-content">
        <h2>
          {title} ({tag})
        </h2>
        <p>{description}</p>
        <div className="project-card-footer">
          <span>{startDate.toLocaleDateString()}</span>
          <div className="project-card-tech-stack">
            {techStack.map((tech, index) => {
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
          <a href={link} target="_blank" rel="noreferrer">
            <button>View Project</button>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <button>View Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
