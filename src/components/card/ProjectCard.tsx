import { getSingleProjectData } from "../../utils/getSkillData";
import { ProjectCardProps } from "../../utils/types/project";
import Git from "../../assets/code-icons/git.svg";
import "./ProjectCard.css";
import { motion, useTransform } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  background,
  // link,
  github,
  techStack,
  tag,
  startDate,
  scrollYProgress,
}: ProjectCardProps) => {
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["36vh", "68vh", "235vh"],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.99, 1],
    [1, 1, 1, 0],
  );
  return (
    <motion.div
      className="project-card"
      // onClick={() => window.open(link, "_blank")}
      style={{ backgroundImage: `url(${background})`, y, opacity }}
    >
      <div className="project-card-tag">
        <p>{tag}</p>
      </div>
      <div className="project-card-footer">
        <p className="project-start-date">{startDate.toLocaleDateString()}</p>
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-description">{description}</p>
        <div className="project-card-links">
          <a href={github} className="project-link" target="_blank">
            <img
              loading="eager"
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
        {techStack.map((tech, index) => {
          const skill = getSingleProjectData(tech);
          return (
            <a href={skill?.link} target="_blank" key={index}>
              <img
                loading="eager"
                src={skill?.img}
                width={"30px"}
                className="icon-image"
                alt={skill?.alt}
              />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
