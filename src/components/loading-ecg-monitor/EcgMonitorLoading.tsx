import React from "react";
import "./EcgMonitorLoading.css";

import { motion, MotionValue, useTransform } from "framer-motion";
import Left from "../../assets/monitor/left.png";
import Right from "../../assets/monitor/right.png";
import Side from "../../assets/monitor/side.png";
import Top from "../../assets/monitor/top.png";

const EcgMonitorLoading = ({
  scrollProgress,
  imageNumber,
}: {
  scrollProgress: MotionValue<number>;
  imageNumber: number;
}) => {
  const secondOpacity = useTransform(
    scrollProgress,
    [0, 0.85, 0.86, 0.9, 0.91, 1],
    [0, 0, 1, 1, 0, 0],
  );
  const firstOpacity = useTransform(
    scrollProgress,
    [0, 0.84, 0.85, 1],
    [1, 1, 0, 0],
  );

  return (
    <React.Fragment>
      <motion.div
        className="monitor-content"
        initial={{ opacity: 0 }}
        style={{ opacity: secondOpacity }}
      >
        <img
          src={
            imageNumber === 1
              ? Top
              : imageNumber === 2
                ? Right
                : imageNumber === 3
                  ? Left
                  : imageNumber === 4
                    ? Side
                    : "none"
          }
          alt=""
          width={"300px"}
        />
        <h3>Loading...</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        style={{ opacity: firstOpacity }}
        className="monitor-content"
      >
        <h3>No Connection</h3>
      </motion.div>
    </React.Fragment>
  );
};

export default EcgMonitorLoading;
