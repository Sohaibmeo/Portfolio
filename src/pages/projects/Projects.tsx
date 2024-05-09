import ProjectCard from "../../components/card/ProjectCard";
import ScrollProgress from "../../components/scroll-progress/ScrollProgress";
import { getHandSvgPathData } from "../../utils/data/handSvgPathData";
import getProjectData from "../../utils/projectData";

import { motion } from "framer-motion";

import "./Projects.css";

const Projects = () => {
  const projectsData = getProjectData();
  const leftText: string = "projects";
  const leftTextCharacters = leftText.split("");
  const defaultTransitionTime = 1;

  const pathVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "-110%",
      fill: "var(--background-color-dark)",
      transition: {
        duration: defaultTransitionTime,
        type: "spring",
      },
    },
  };

  return (
    <section className="project-container">
      <ScrollProgress />
      <motion.div className="section hand-animation-section">
        <h1 className="project-heading">
          {leftTextCharacters.map((text: string, index: number) => {
            const distance = Math.abs(
              leftTextCharacters.length / 2 - index - 1,
            );
            const divider = distance === 0 ? 1 : distance / 8 + 1;
            const stiffness = 50 / divider;
            return (
              <motion.div
                key={index}
                initial={{ y: "100vh" }}
                animate={{
                  y: 10,
                  transition: {
                    duration: 10,
                    type: "spring",
                    stiffness,
                  },
                }}
              >
                {text}
              </motion.div>
            );
          })}
        </h1>
        <motion.svg
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          viewBox="0 162.455 939.105 324.685"
        >
          <g transform="translate(0.000000,714.000000) scale(0.100000,-0.100000)">
            <path className="hand-path" d={getHandSvgPathData()} />
          </g>
        </motion.svg>
      </motion.div>
      {projectsData.map((project, index: number) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;
