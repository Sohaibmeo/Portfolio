import ProjectCard from "../../components/card/ProjectCard";
import { getHandSvgPathData } from "../../utils/data/handSvgPathData";
import getProjectData from "../../utils/projectData";

import { motion, useAnimationControls, useScroll, useTransform } from "framer-motion";

import "./Projects.css";
import { useRef } from "react";

const Projects = () => {
  const projectsData = getProjectData();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const controls = useAnimationControls();
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [
      "-43vh",
      "16vh",
      "-52vh",
      "16vh",
      "-52vh",
      "16vh",
      "-52vh",
      "16vh",
      "-52vh",
      "16vh",
      "-52vh",
    ],
  );

  const textMove = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ["0vh", "160vh", "160vh"],
  );
  const textShow = useTransform(
    scrollYProgress,
    [0, 0.1, 0.11, 1],
    [1, 1, 0, 0],
  );
  const defaultTransitionTime = 1;

  const svgHandVariants = {
    hidden: { y: "100vh", opacity: 0 },
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

  const textVariants = {
    hidden:{ y: "160vh", opacity: 1 },
    visible:{
      y: "0vh",
      transition: {
        duration: defaultTransitionTime,
        type: "spring",
      },
    }
  }

  const whenVisible = () => {
    controls.start("visible");
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={whenVisible}
      className="project-container"
      ref={ref}
    >
      <motion.div className="hand-animation-section">
        <motion.h1
          className="project-heading"
          variants={textVariants}
          initial="hidden"
          animate={controls}
          style={{ y: textMove, opacity: textShow }}
        >
          Projects
        </motion.h1>
        <motion.svg
          initial="hidden"
          animate={controls}
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
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["center end", "end start"],
        });
        return (
          <div key={index} className="project-card-container" ref={ref}>
            <ProjectCard scrollYProgress={scrollYProgress} {...project} />
          </div>
        );
      })}
    </motion.section>
  );
};

export default Projects;
