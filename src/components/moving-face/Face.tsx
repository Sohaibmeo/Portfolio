import "./Face.css";
import {
  getBeardClipPath,
  getEyeClipPath,
  getHairClipPath,
} from "../../utils/getFaceData";

const Face = ({position}:{
  position: {x: number, y: number}
}) => {

  return (
    <div
      className="face"
    >
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
