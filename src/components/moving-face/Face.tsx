import "./Face.css";
import { getEyeClipPath, getHairClipPath } from "../../utils/getFaceData";
import { MotionValue, motion, useTransform } from "framer-motion";
import { getSvgBeardPath } from "../../utils/data/getSvgBeardPath";
import { getBrainClipPath } from "../../utils/data/getSvgBrainPath";
import { getPipe1Path, getPipe2Path } from "../../utils/data/getPipePath";

const Face = ({
  position,
  scrollYProgress,
}: {
  position: { x: number; y: number };
  scrollYProgress: MotionValue<number>;
}) => {
  const moveUp = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-100%", "-100%"],
  );
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-700, -700, 0],
  );
  const moveDown = useTransform(scrollYProgress, [0, 0.5, 1], [0, 25, 25]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0.6]);

  return (
    <motion.div className="face" initial={{ scale: 0 }} style={{ scale }}>
      <svg className="svg">
        <clipPath id="hair-clip" clipPathUnits="objectBoundingBox">
          <path d={getHairClipPath()}></path>
        </clipPath>
      </svg>
      <motion.svg
        className="beard-svg"
        viewBox="0 0 8888 5342"
        initial={{ y: 0, x: "-50%" }}
        style={{ y: moveDown }}
      >
        <g
          transform="matrix(-0.1, 0, 0, 0.1, -39996.001192, -24055.313217)"
          style={{ transformOrigin: "44440px 26724.8px" }}
        >
          <path d={getSvgBeardPath()}></path>
        </g>
      </motion.svg>
      <svg className="svg">
        <clipPath id="eye-clip" clipPathUnits="objectBoundingBox">
          <path d={getEyeClipPath()}></path>
        </clipPath>
      </svg>
      <motion.svg
        className="brain-svg"
        viewBox="136.468 80.554 752.233 597.365"
        initial={{ x: "-50%", y: "-15%", scale: 1 }}
        animate={{
          scale: 1.05,
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          },
        }}
        style={{ opacity: fadeIn }}
      >
        <path d={getBrainClipPath()}></path>
      </motion.svg>
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
      <motion.div
        className="hair"
        initial={{ y: 0, x: "-49%", opacity: 1 }}
        style={{ y: moveUp, opacity: fadeOut }}
      />
      <motion.div
        className="eyes"
        initial={{ y: 0, x: "-50%" }}
        style={{ y: moveDown }}
      />
      <motion.div
        className="eyes-container"
        initial={{ y: 0, x: "-50%" }}
        style={{ y: moveDown }}
      >
        <div className="left-eye">
          <div
            className="left-eyeball-shine"
            style={{
              transform: `translate(${position.x * 100 * 2.5}%, ${position.y * 100 * 1.5}%)`,
            }}
          ></div>
        </div>
        <div className="right-eye">
          <div
            className="right-eyeball-shine"
            style={{
              transform: `translate(${position.x * 100 * 2.5}%, ${position.y * 100 * 1.5}%)`,
            }}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Face;
