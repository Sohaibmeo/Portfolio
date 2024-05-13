import { MotionValue, motion } from "framer-motion";
import "./Eyes.css";

const Eyes = ({
  moveDown,
  position,
}: {
  moveDown: MotionValue<number>;
  position: { x: number; y: number };
}) => {
  return (
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
  );
};

export default Eyes;
