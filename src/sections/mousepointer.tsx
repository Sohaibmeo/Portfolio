import { useState } from "react";
import { motion } from "framer-motion";

import blackwhite from "../assets/blackwhite.png";
import filter from "../assets/filter.png";
import "./home.css";
import "./common.css";

export default function MousePointerHome() {
  const [isHovered, setIsHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

  const updateMaskPosition = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMaskPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    });
};

  return (
      <section className="section">
        <div
            onMouseMove={updateMaskPosition}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                width: '350px',
                height: '540px',
                overflow: 'hidden',
                borderRadius: '8px'
            }}
        >
            {/* Background image */}
            <div style={{
                backgroundImage: `url(${blackwhite})`,
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
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${filter})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                initial={{ backgroundClip: 'border-box' }}
                animate={{
                    clipPath: isHovered ? `circle(100px at ${maskPosition.x}px ${maskPosition.y}px)` : 'circle(0px at 0px 0px)'
                }}
                transition={{ duration: 0 }}
            />
        </div>
       
      </section>
  );
}
