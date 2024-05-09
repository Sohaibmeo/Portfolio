import { MotionValue, motion, useSpring } from "framer-motion";
import './ScrollProgress.css'

const ScrollProgress = ({scrollYProgress}:{
  scrollYProgress: MotionValue<number>
}) => {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div style={{ scaleX: scaleX }} className="progress" />;
};

export default ScrollProgress;
