import { useCallback, useEffect, useState } from "react";
import "./CursorAnimation.css";

const CursorAnimation = ({
  content = "",
  size = 10,
  borderSize = 40,
  borderBackgroundSize = 1,
  show = false,
  backgroundColorCursor = "black",
  backgroundColorBorder = "rgba(255,255,255,1)",
}: {
  size?: number;
  borderSize?: number;
  content?: string;
  borderBackgroundSize?: number;
  show?: boolean;
  backgroundColorCursor?: string;
  backgroundColorBorder?: string;
}) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [outOfBounds, setOutOfBounds] = useState(false);

  const handleMouseAnimation = useCallback((event: MouseEvent) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
    if (
      event.clientX < 10 ||
      event.clientX > window.innerWidth - 10 ||
      event.clientY < 10 ||
      event.clientY > window.innerHeight - 10
    ) {
      // Todo: Out of bounds should add a class that changes cursor instead of hiding it
      setOutOfBounds(true);
    } else {
      console.log(
        "Event clientX: ",
        event.clientX,
        "Event clientY: ",
        event.clientY,
      );
      setOutOfBounds(false);
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseAnimation);
  }, [handleMouseAnimation]);
  const handleMouseLeave = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseAnimation);
  }, [handleMouseAnimation]);

  useEffect(() => {
    if (show) {
      handleMouseEnter();
    } else {
      handleMouseLeave();
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseAnimation);
    };
  }, [show]);

  return (
    <>
      <div
        className="mouse-circle"
        style={{
          width: size,
          height: size,
          transform: `translate(${cursorPos.x - size / 2}px, ${cursorPos.y - size / 2}px)`,
          backgroundColor: backgroundColorCursor,
          display: outOfBounds || !show ? "none" : "flex",
        }}
      >
        <h6>{content}</h6>
      </div>
      <div
        className="mouse-circle border"
        style={{
          width: borderSize,
          height: borderSize,
          border: `${borderBackgroundSize}px solid ${backgroundColorBorder}`,
          transform: `translate(${cursorPos.x - borderSize / 2 - borderBackgroundSize}px, ${cursorPos.y - borderSize / 2 - borderBackgroundSize}px)`,
          backgroundColor: "transparent",
          display: outOfBounds || !show ? "none" : "flex",
        }}
      />
    </>
  );
};

export default CursorAnimation;
