import { useRef } from "react";
import "./Parallex.css";
import { motion, useScroll } from "framer-motion";

const Parallex = () => {
  const parallexSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallexSectionRef,
    offset: ["start end", "end end"],
  });
  return (
    <motion.section className="layer-wrapper" >
      <motion.div style={{position:"sticky", zIndex: 999}}>Parallex{scrollYProgress.get()}</motion.div>
      <motion.div ref={parallexSectionRef}>Parallex</motion.div>
      <motion.div>Parallex</motion.div>
      <motion.div>Parallex</motion.div>
      <motion.div>Parallex</motion.div>
    </motion.section>
  );
};

export default Parallex;
