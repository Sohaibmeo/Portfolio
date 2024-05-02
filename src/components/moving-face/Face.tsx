import "./Face.css";
import { useState } from "react";
import {
  getBeardClipPath,
  getEyeClipPath,
  getHairClipPath,
} from "../../utils/getFaceData";

const Face = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const posX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
    const posY =
      (event.clientY - window.innerHeight / 2) / window.innerHeight;
    setPosition({ x: posX, y: posY });
  };

  const handleMouseEnter = () => {
    document.addEventListener("mousemove", handleMouseMove);
  }
  const handleMouseLeave = () => {
    document.removeEventListener("mousemove", handleMouseMove);
  }

  //call the mouse leave when you scroll a lot down ok?

  return (
    <div className="face" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <svg className="svg">
        <clipPath id="hair-clip" clipPathUnits="objectBoundingBox">
          <path d={getHairClipPath()}></path>
        </clipPath>
      </svg>
      <svg className="svg">
        <clipPath id="beard-clip" clipPathUnits="objectBoundingBox">
          <path d={getBeardClipPath()}></path>
        </clipPath>
      </svg>
      <svg className="svg">
        <clipPath id="eye-clip" clipPathUnits="objectBoundingBox">
          <path d={getEyeClipPath()}></path>
        </clipPath>
      </svg>

      <div className="hair" />
      <div className="beard" />
      <div className="eyes" />
      <div className="eyes-container">
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
      </div>
    </div>
  );
};

export default Face;
