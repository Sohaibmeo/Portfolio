import { useCursor } from "../../contexts/Cursor";
import "./CursorAnimation.css";

const CursorAnimation: React.FC = () => {
  const {
    cursorPos,
    outOfBounds,
    content,
    cursorSize,
    borderSize,
    borderBackgroundSize,
    backgroundColorCursor,
    borderColor,
    backgroundColorBorder,
  } = useCursor();

  return (
    <>
      <div
        className="mouse-circle"
        style={{
          width: cursorSize,
          height: cursorSize,
          transform: `translate(${cursorPos.x - cursorSize / 2}px, ${cursorPos.y - cursorSize / 2}px)`,
          backgroundColor: backgroundColorCursor,
          display: outOfBounds ? "none" : "flex",
        }}
      >
        <h6>{content}</h6>
      </div>
      <div
        className="mouse-circle border"
        style={{
          width: borderSize,
          height: borderSize,
          border: `${borderSize ? borderBackgroundSize : 0}px solid ${borderColor}`,
          transform: `translate(${cursorPos.x - borderSize / 2 - borderBackgroundSize}px, ${cursorPos.y - borderSize / 2 - borderBackgroundSize}px)`,
          backgroundColor: `${backgroundColorBorder}`,
          display: outOfBounds ? "none" : "flex",
        }}
      />
    </>
  );
};

export default CursorAnimation;
