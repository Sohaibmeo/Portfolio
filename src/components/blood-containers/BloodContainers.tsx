import { motion, MotionValue, useTransform } from "framer-motion";
import Skills from "../skills/Skill";
import React from "react";
import "./BloodContainers.css";
import EcgMonitorLoading from "../loading-ecg-monitor/EcgMonitorLoading";

const BloodContainers = ({
  scrollYProgress,
  isSmall,
}: {
  scrollYProgress: MotionValue<number>;
  isSmall: boolean;
}) => {
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [0, 0, 1, 1]);
  const thirdOpacity = useTransform(
    scrollYProgress,
    [0, 0.61, 0.63, 1],
    [0, 0, 1, 1],
  );
  return (
    <React.Fragment>
      <motion.div
        className="top-boxes blood-container"
        initial={{ opacity: 0 }}
        style={{ opacity }}
      >
        <div className="leftBox">
          <div className="loading-monitor">
            <EcgMonitorLoading
              scrollProgress={scrollYProgress}
              imageNumber={1}
            />
          </div>
          <motion.div
            className="monitor-text"
            initial={{ opacity: 0 }}
            style={{ opacity: thirdOpacity }}
          >
            <h2>About Me</h2>
            <p className="about-text">
              Resourceful Software Engineer,Detail-oriented collaboration with
              others to define project expectations and demand. Hands-on testing
              and debugging to address inconsistencies and maintain performance
              thresholds.
            </p>
          </motion.div>
        </div>
        <div className="rightBox">
          <div className="loading-monitor">
            <EcgMonitorLoading
              scrollProgress={scrollYProgress}
              imageNumber={2}
            />
          </div>
          <motion.div
            className="monitor-text"
            initial={{ opacity: 0 }}
            style={{ opacity: thirdOpacity }}
          >
            <h2>Experience</h2>
            <p className="about-text">
              Software Engineer - Devsinc · Full-time <br />
              <span>Mar 2022 - Apr 4 2024</span> <br />
              Software Engineer Internship - Devsinc - Part-time
              Part-timeDevsinc · Part-time <br />
              <span>Oct 2021 - Jan 2022</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="bottom-boxes blood-container"
        initial={{ opacity: 0 }}
        style={{ opacity }}
      >
        <div className="leftBox">
          <div className="loading-monitor">
            <EcgMonitorLoading
              scrollProgress={scrollYProgress}
              imageNumber={3}
            />
          </div>
          <motion.div
            className="monitor-text"
            initial={{ opacity: 0 }}
            style={{ opacity: thirdOpacity }}
          >
            <h2>Skills</h2>
            <ul style={{ margin: 0, padding: 0 }}>
              {<Skills width={isSmall ? "20px" : "40px"} />}
            </ul>
          </motion.div>
        </div>
        <div className="rightBox">
          <div className="loading-monitor">
            <EcgMonitorLoading
              scrollProgress={scrollYProgress}
              imageNumber={4}
            />
          </div>
          <motion.div
            className="monitor-text"
            initial={{ opacity: 0 }}
            style={{ opacity: thirdOpacity }}
          >
            <h2>Education</h2>
            <p className="about-text">
              Bachelor of Computer Science <span>2018 - July 2022</span>
              University of Computer And Emerging Sciences,Islamabad,Pakistan
              Pre-Engineering <span>2016 - 2018</span>
              Bright Future Internation School
            </p>
          </motion.div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default BloodContainers;
