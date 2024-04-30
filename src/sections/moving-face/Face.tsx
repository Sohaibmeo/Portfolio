import "./Face.css";
import "../common.css";
import Hair from "../../assets/pieces/hair.svg";
import Beard from "../../assets/pieces/lower_head.svg";
import DragonEyes from "../../assets/pieces/dragon_eyes.svg";
import { useEffect, useState } from "react";

const Face = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const posX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
      const posY =
        (event.clientY - window.innerHeight / 2) / window.innerHeight;
      setPosition({ x: posX, y: posY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section avatar-wrapper">
      <div className="face">
        <img src={Hair} alt="hair" className="hair" />
        <img src={DragonEyes} alt="eyes" className="eyes" />
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
        <img src={Beard} alt="beard" className="beard" />
      </div>
    </section>
  );
};

export default Face;
