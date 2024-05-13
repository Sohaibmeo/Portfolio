import { motion, MotionValue, useTransform } from "framer-motion";
import Skills from "../skills/Skill";
import React from "react";
import "./BloodContainers.css";

const BloodContainers = ({
  scrollYProgress,
  isSmall,
}: {
  scrollYProgress: MotionValue<number>;
  isSmall: boolean;
}) => {
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.7, 1],
    [0, 0, 1, 1],
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [0, 0, 1]);
  return (
    <React.Fragment>
      <motion.div
        className="top-boxes blood-container"
        initial={{ opacity: 0 }}
        style={{ opacity }}
      >
        <div className="leftBox">
          <h2>About Me</h2>
          <motion.p
            className="about-text"
            initial={{ opacity: 0 }}
            style={{ opacity: textOpacity }}
          >
            Resourceful Software Engineer with in-depth knowledge of Front End
            Web Development. Experience handling complex HTML and CSS coding,
            Javascript And ReactJS design and extensions to meet organization's
            front-facing internet needs. Detail-oriented collaboration with
            others to define project expectations and demand. Hands-on testing
            and debugging to address inconsistencies and maintain performance
            thresholds.
          </motion.p>
        </div>
        <div className="rightBox">
          <h2>Experience</h2>
          <motion.p
            className="about-text"
            initial={{ opacity: 0 }}
            style={{ opacity: textOpacity }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nemo consequuntur alias sed magnam repudiandae aliquid, quae
            deserunt qui sequi consectetur culpa dolores vero itaque provident.
            Neque eligendi commodi voluptatibus? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Dolorem nemo consequuntur alias sed
            magnam repudiandae aliquid, quae deserunt qui sequi consectetur
            culpa dolores vero itaque provident. Neque eligendi commodi
            voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dolorem nemo consequuntur alias sed magnam repudiandae
            aliquid, quae deserunt qui sequi consectetur culpa dolores vero
            itaque provident. Neque eligendi commodi voluptatibus?
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        className="bottom-boxes blood-container"
        initial={{ opacity: 0 }}
        style={{ opacity }}
      >
        <div className="leftBox">
          <h2>Skills</h2>
          <motion.ul initial={{ opacity: 0 }} style={{ opacity: textOpacity }}>
            {<Skills width={isSmall ? "20px": "40px"} />}
          </motion.ul>
        </div>
        <div className="rightBox">
          <h2>Education</h2>
          <motion.p
            className="about-text"
            initial={{ opacity: 0 }}
            style={{ opacity: textOpacity }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nemo consequuntur alias sed magnam repudiandae aliquid, quae
            deserunt qui sequi consectetur culpa dolores vero itaque provident.
            Neque eligendi commodi voluptatibus? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Dolorem nemo consequuntur alias sed
            magnam repudiandae aliquid, quae deserunt qui sequi consectetur
            culpa dolores vero itaque provident. Neque eligendi commodi
            voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dolorem nemo consequuntur alias sed magnam repudiandae
            aliquid, quae deserunt qui sequi consectetur culpa dolores vero
            itaque provident. Neque eligendi commodi voluptatibus?
          </motion.p>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default BloodContainers;
