import "./Face.css";
import { getEyeClipPath, getHairClipPath } from "../../utils/getFaceData";
import { MotionValue, motion, useTransform } from "framer-motion";
import { getSvgBeardPath } from "../../utils/data/getSvgBeardPath";
import { getBrainClipPath } from "../../utils/data/getSvgBrainPath";
import Eyes from "../moving-eyes/Eyes";
import Pipes from "../pipes/Pipes";
import BloodContainers from "../blood-containers/BloodContainers";
import useMediaQuery from "../../utils/helper/media/useMediaQuery";

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
  const endOpacity = useTransform(scrollYProgress, [0, 0.96, 1], [1, 1, 0]);
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const moveDown = useTransform(scrollYProgress, [0, 0.5, 1], [0, 25, 25]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.05, 0.2, 1], [0, 0, 1, 1]);
  const fadeOut = useTransform(
    scrollYProgress,
    [0, 0.05, 0.2, 1],
    [1, 1, 0, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 1],
    [1, 1, isSmall ? 1 : 0.6, isSmall ? 1 : 0.6],
  );

  return (
    <motion.div
      className="face"
      initial={{ scale: 1 }}
      style={{ scale, opacity: endOpacity }}
    >
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
        initial={{ scale: 1 }}
        style={{ opacity: fadeIn }}
      >
        <path d={getBrainClipPath()}></path>
      </motion.svg>

      <Pipes scrollYProgress={scrollYProgress} />
      <BloodContainers scrollYProgress={scrollYProgress} isSmall={isSmall} />

      <motion.div
        className="hair"
        initial={{ y: 0, x: "-49%", opacity: 1 }}
        style={{ y: moveUp, opacity: fadeOut }}
      />
      <motion.div
        className="outer-eyes"
        initial={{ y: 0, x: "-50%" }}
        style={{ y: moveDown }}
      />
      <Eyes moveDown={moveDown} position={position} />
    </motion.div>
  );
};

export default Face;
