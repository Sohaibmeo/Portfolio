import ProjectCard from "../../components/card/ProjectCard";
// import ScrollProgress from "../../components/scroll-progress/ScrollProgress";
import { getHandSvgPathData } from "../../utils/data/handSvgPathData";
import getProjectData from "../../utils/projectData";

import { motion, useScroll, useTransform } from "framer-motion";

import "./Projects.css";
import { useRef } from "react";

const Projects = () => {
  const projectsData = getProjectData();
  const { scrollYProgress } = useScroll();
  const y = useTransform(
    scrollYProgress,
    [
      0, 0.0714, 0.1428, 0.2142, 0.2856, 0.357, 0.4284, 0.4998, 0.5712, 0.6426,
      0.714, 0.7854, 0.8568, 0.9282, 1,
    ],
    [
      "-43vh",
      "16vh",
      "-43vh",
      "-43vh",
      "16vh",
      "-43vh",
      "-43vh",
      "16vh",
      "-43vh",
      "-43vh",
      "16vh",
      "-43vh",
      "-43vh",
      "16vh",
      "-43vh",
    ],
  );

  const textMove = useTransform(
    scrollYProgress,
    [0, 0.0714, 1],
    ["0vh", "130vh", "130vh"],
  );
  const textShow = useTransform(
    scrollYProgress,
    [0, 0.0714, 0.075, 1],
    [1, 1, 0, 0],
  );
  const leftText: string = "projects";
  const leftTextCharacters = leftText.split("");
  const defaultTransitionTime = 1;

  const svgHandVariants = {
    hidden: { y: '100vh', opacity: 0 },
    visible: {
      y: "-43vh",
      opacity: 1,
      fill: "var(--background-color-dark)",
      transition: {
        duration: defaultTransitionTime,
        type: "spring",
      },
    },
  };

  return (
    <section className="project-container">
      {/* <ScrollProgress /> */}
      <motion.div className="section hand-animation-section">
        <motion.h1
          className="project-heading"
          initial={{ y: "0vh", opacity: 1 }}
          style={{ y: textMove, opacity: textShow }}
        >
          {leftTextCharacters.map((text: string, index: number) => {
            const distance = Math.abs(
              leftTextCharacters.length / 2 - index - 1,
            );
            const divider = distance === 0 ? 1 : distance / 8 + 1;
            const stiffness = 50 / divider;
            return (
              <motion.div
                key={index}
                initial={{ y: "1000%", opacity: 1 }}
                animate={{
                  y: "0%",
                  transition: {
                    duration: defaultTransitionTime,
                    type: "spring",
                    stiffness,
                  },
                }}
                // style={{ y: textMove }}
              >
                {text}
              </motion.div>
            );
          })}
        </motion.h1>
        <motion.svg
          initial="hidden"
          animate="visible"
          variants={svgHandVariants}
          viewBox="0 162.455 939.105 324.685"
          style={{ y }}
        >
          <g transform="translate(0.000000,714.000000) scale(0.100000,-0.100000)">
            <path className="hand-path" d={getHandSvgPathData()} />
          </g>
        </motion.svg>
      </motion.div>
      {projectsData.map((project, index: number) => {
        const cardRef = useRef(null);
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end end"],
        });

        const y = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          ["0%", "200%", "0%"],
        );
        return (
          <div key={index} className="project-card-container" ref={ref}>
            <ProjectCard
              ref={cardRef}
              {...project}
              style={{
                y,
              }}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
