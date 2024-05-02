import "./Parallex.css";
import { motion } from "framer-motion";

const Parallex = () => {
  return (
    <motion.section
      className="layer-wrapper"
      initial={{ opacity: 0.25 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div initial={{ x: "-50%", y: "50%" }}>Parallex</motion.div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        Parallex
      </motion.div>
      <motion.div initial={{ y: "-50%" }}>Parallex</motion.div>
      <motion.div initial={{ y: "-50%" }}>Parallex</motion.div>
      <motion.div initial={{ x: "-50%", y: "-50%" }}>Parallex</motion.div>
    </motion.section>
  );
};

export default Parallex;
