import React from "react";
import "./EcgMonitorLoading.css";

import { motion, MotionValue, useTransform } from "framer-motion";
import Left from "../../assets/brain/left.svg";
import Right from "../../assets/brain/right.svg";
import Side from "../../assets/brain/side.svg";
import Top from "../../assets/brain/top.svg";

const EcgMonitorLoading = ({
  scrollProgress,
  imageNumber,
}: {
  scrollProgress: MotionValue<number>;
  imageNumber: number;
}) => {
  const secondOpacity = useTransform(
    scrollProgress,
    [0, 0.40, 0.41, 0.6, 0.61, 1],
    [0, 0, 1, 1, 0, 0],
  );
  const firstOpacity = useTransform(
    scrollProgress,
    [0, 0.40, 0.41, 1],
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
          className="brain-img"
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
