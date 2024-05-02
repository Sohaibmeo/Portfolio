import { useEffect, useState } from "react";
import "./CursorAnimation.css";

const CursorAnimation = ({
  size,
  show = false,
  backgroundColor = "black",
}: {
  size: number;
  show?: boolean;
  backgroundColor?: string;
}) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBorderPos, setCursorBorderPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const updateCursorBorder = () => {
      const easing = 8; // Speed of the following effect
      setCursorBorderPos(prev => ({
        x: prev.x + (cursorPos.x - prev.x) / easing,
        y: prev.y + (cursorPos.y - prev.y) / easing
      }));
      requestAnimationFrame(updateCursorBorder);
    };

    document.addEventListener("mousemove", handleMouseMove);
    updateCursorBorder(); // Start the animation loop

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPos]); // Dependency on cursorPos to create a smooth transition effect

  return (
    <>
      <div
        className="mouse-circle"
        style={{
          width: size,
          height: size,
          transform: `translate(${cursorPos.x - (size / 2)}px, ${cursorPos.y - (size / 2)}px)`,
          display: show ? "block" : "none",
          backgroundColor,
        }}
      />
      <div
        className="mouse-circle border"
        style={{
          width: size * 1.5, // Larger size for the following cursor
          height: size * 1.5,
          transform: `translate(${cursorBorderPos.x - (size * 0.75)}px, ${cursorBorderPos.y - (size * 0.75)}px)`,
          display: show ? "block" : "none",
          backgroundColor: "rgba(255,255,255,0.5)", // Semi-transparent white for the border cursor
        }}
      />
    </>
  );
};

export default CursorAnimation;
