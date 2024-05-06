import { useCursor } from "../../contexts/CursorAnimation";
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
    backgroundColorBorder,
    show,
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
          width: show ? borderSize : 0,
          height: show ? borderSize : 0,
          border: `${show ? borderBackgroundSize : 0}px solid ${backgroundColorBorder}`,
          transform: `translate(${cursorPos.x - borderSize / 2 - borderBackgroundSize}px, ${cursorPos.y - borderSize / 2 - borderBackgroundSize}px)`,
          backgroundColor: "transparent",
          display: outOfBounds || !show ? "none" : "flex",
        }}
      />
    </>
  );
};

export default CursorAnimation;
