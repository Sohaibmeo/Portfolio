import { useState } from "react";
import { motion } from "framer-motion";

import blackwhite from "../assets/blackwhite.png";
import filter from "../assets/filter.png";
import "./home.css";
import "./common.css";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
      <section className="container section">
         <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="content"
         >
          <h1 className="title">Sohaib Meo</h1>
          <p className="text">
            Software Engineer
          </p>
        </motion.div>
         <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                width: '350px',
                height: '510px',
                overflow: 'hidden',
                borderRadius: '8px' // optional, for styled corners
            }}
        >
            {/* Background image */}
            <div style={{
                backgroundImage: `url(${filter})`,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} />

            {/* Foreground image */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${blackwhite})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
        </div>
       
      </section>
  );
}
