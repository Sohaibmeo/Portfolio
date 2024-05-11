import { getSingleProjectData } from "../../utils/getSkillData";
import { ProjectCardProps } from "../../utils/types/project";
import Git from "../../assets/code-icons/git.svg";
import "./ProjectCard.css";
import { motion, useTransform } from "framer-motion";
import LinkIcon from "../../assets/link.svg";
import { useCursor } from "../../contexts/Cursor";

const ProjectCard = ({
  title,
  description,
  background,
  link,
  github,
  techStack,
  tag,
  startDate,
  scrollYProgress,
}: ProjectCardProps) => {
  const { toggleShow, setCursorContent, setCursorSize } = useCursor();
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
  const changeCursorLook = () => {
    toggleShow();
    setCursorContent("view project");
    setCursorSize(80);
  };
  const resetCursorLook = () => {
    toggleShow();
    setCursorContent("");
    setCursorSize(10);
  };
  return (
    <motion.div className="project-card" style={{ y, opacity }}>
      <div
        className="project-background-img"
        onClick={() => window.open(link, "_blank")}
        onMouseEnter={changeCursorLook}
        onMouseLeave={resetCursorLook}
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="project-card-tag">
        <p>{tag}</p>
      </div>
      <div className="project-card-footer">
        <p className="project-start-date">{startDate.toLocaleDateString()}</p>
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-description">{description}</p>
        <div className="project-card-links" >
          <a href={link} className="project-link" target="_blank">
            <p>View</p>
            <img
              loading="eager"
              src={LinkIcon}
              width={"18px"}
              style={{ aspectRatio: 1 }}
              color="white"
              alt="Link"
            />
          </a>
          <a href={github} className="project-link" target="_blank">
            <img
              loading="eager"
              src={Git}
              width={"35px"}
              style={{ aspectRatio: 1 }}
              alt="github"
            />
            <p>Code</p>
            <img
              loading="eager"
              src={LinkIcon}
              width={"18px"}
              style={{ aspectRatio: 1 }}
              alt="Link"
            />
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
