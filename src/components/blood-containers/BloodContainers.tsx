// import { MotionValue } from "framer-motion";
import Skills from "../skills/Skill";
import React from "react";
import "./BloodContainers.css";

const BloodContainers = ({
//   scrollYProgress,
}: {
//   scrollYProgress?: MotionValue<number>;
}) => {
  return (
    <React.Fragment>
      <div className="top-boxes">
        <div className="leftBox">
          <h2>Skills</h2>
          <ul>{<Skills width="40px" />}</ul>
        </div>
        <div className="rightBox">
          <h2>Experience</h2>
          <p>
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
          </p>
        </div>
      </div>
      <div className="bottom-boxes">
        <div className="leftBox">
          <h2>About Me</h2>
          <p>
            Resourceful Software Engineer with in-depth knowledge of Front End
            Web Development. Experience handling complex HTML and CSS coding,
            Javascript And ReactJS design and extensions to meet organization's
            front-facing internet needs. Detail-oriented collaboration with
            others to define project expectations and demand. Hands-on testing
            and debugging to address inconsistencies and maintain performance
            thresholds.
          </p>
        </div>
        <div className="rightBox">
          <h2>Education</h2>
          <p>
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
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BloodContainers;
