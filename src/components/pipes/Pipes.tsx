import { MotionValue, motion, useTransform } from "framer-motion";
import { getPipe1Path, getPipe2Path } from "../../utils/data/getPipePath";
import "./Pipes.css";
import React from "react";

const Pipes = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-700, -700, 0],
  );
  return (
    <React.Fragment>
      <div className="pipes-container-left">
        <motion.svg
          viewBox="83.486 233.806 332.864 206.963"
          className="blood-pipe pipe-1"
          initial={{ strokeDashoffset: -700, strokeDasharray: 700 }}
          style={{ strokeDashoffset }}
        >
          <motion.path d={getPipe1Path()} />
        </motion.svg>
        <motion.svg
          viewBox="83.486 233.806 332.864 206.963"
          className="blood-pipe pipe-1 pipe-right"
          initial={{ strokeDashoffset: -700, strokeDasharray: 700 }}
          style={{ strokeDashoffset }}
        >
          <motion.path d={getPipe1Path()} />
        </motion.svg>
      </div>
      <div className="pipes-container-right">
        <motion.svg
          viewBox="83.486 230.87 315.864 460.299"
          className="blood-pipe pipe-2 "
          initial={{ strokeDashoffset: -700, strokeDasharray: 700 }}
          style={{ strokeDashoffset }}
        >
          <motion.path d={getPipe2Path()} />
        </motion.svg>
        <motion.svg
          viewBox="83.486 230.87 315.864 460.299"
          className="blood-pipe pipe-2 pipe-right"
          initial={{ strokeDashoffset: -700, strokeDasharray: 700 }}
          style={{ strokeDashoffset }}
        >
          <motion.path d={getPipe2Path()} />
        </motion.svg>
      </div>
    </React.Fragment>
  );
};

export default Pipes;
