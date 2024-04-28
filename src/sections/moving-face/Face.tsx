import "./Face.css";
import "../common.css";
import Hair from "../../assets/pieces/hair.svg";
import Beard from "../../assets/pieces/lower_head.svg";
import LeftEye from "../../assets/pieces/left_eye.svg";
import RightEye from "../../assets/pieces/right_eye.svg";
import DragonEyes from "../../assets/pieces/dragon_eyes.svg";
// import Full from "../../assets/pieces/blackwhite.svg";
import { useEffect, useState } from "react";

const Face = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const posX = event.clientX - window.innerWidth / 2;
      const posY = event.clientY - window.innerHeight / 2;
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
          <div className="left-eye-container">
            <div
              className="left-eyeball"
              style={{
                transform: `translate(${position.x * 0.01}%, ${position.y * 0.01}%)`,
              }}
            >
              <div
                className="left-eyeball-shine"
                style={{
                  transform: `translate(${position.x * 0.08}%, ${position.y * 0.08}%)`,
                }}
              ></div>
            </div>
          </div>
          <div className="right-eye-container">
            <div
              className="right-eyeball"
              style={{
                transform: `translate(${position.x * 0.01}%, ${position.y * 0.01}%)`,
              }}
            >
              <div
                className="right-eyeball-shine"
                style={{
                  transform: `translate(${position.x * 0.08}%, ${position.y * 0.08}%)`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="eye-container">
          <img src={LeftEye} alt="left eye" className="left-eye" />
          <img src={RightEye} alt="right eye" className="right-eye" />
        </div>
        <img src={Beard} alt="beard" className="beard" />
        {/* <img src={Full} alt="full" className="full" /> */}
      </div>
    </section>
  );
};

export default Face;
