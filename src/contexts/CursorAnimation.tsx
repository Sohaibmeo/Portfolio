import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import "./CursorAnimation.css";

interface CursorSettings {
  content: string;
  size: number;
  borderSize: number;
  borderBackgroundSize: number;
  show: boolean;
  backgroundColorCursor: string;
  backgroundColorBorder: string;
  cursorPos: {
    x: number;
    y: number;
  };
  outOfBounds: boolean;
}

interface CursorContextType extends CursorSettings {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  setCursorContent: (content: string) => void;
  setCursorSize: (size: number) => void;
  setBorderSize: (borderSize: number) => void;
  setBorderBackgroundSize: (size: number) => void;
  setShow: (show: boolean) => void;
  setBackgroundColorCursor: (color: string) => void;
  setBackgroundColorBorder: (color: string) => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorSettings, setCursorSettings] = useState<CursorSettings>({
    content: "",
    size: 10,
    borderSize: 40,
    borderBackgroundSize: 1,
    show: false,
    backgroundColorCursor: "black",
    backgroundColorBorder: "rgba(255,255,255,1)",
    cursorPos: { x: 0, y: 0 },
    outOfBounds: false,
  });

  const handleMouseAnimation = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCursorSettings((prevSettings) => ({
      ...prevSettings,
      cursorPos: { x: clientX, y: clientY },
      outOfBounds:
        clientX < 10 ||
        clientX > window.innerWidth - 10 ||
        clientY < 10 ||
        clientY > window.innerHeight - 10,
    }));
  }, []);

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseAnimation);
  }, [handleMouseAnimation]);

  const handleMouseLeave = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseAnimation);
  }, [handleMouseAnimation]);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseAnimation);
    };
  }, []);

  return (
    <CursorContext.Provider
      value={{
        ...cursorSettings,
        handleMouseEnter,
        handleMouseLeave,
        setCursorContent: (content: string) =>
          setCursorSettings((prev) => ({ ...prev, content })),
        setCursorSize: (size: number) =>
          setCursorSettings((prev) => ({ ...prev, size })),
        setBorderSize: (borderSize: number) =>
          setCursorSettings((prev) => ({ ...prev, borderSize })),
        setBorderBackgroundSize: (size: number) =>
          setCursorSettings((prev) => ({
            ...prev,
            borderBackgroundSize: size,
          })),
        setShow: (show: boolean) =>
          setCursorSettings((prev) => ({ ...prev, show })),
        setBackgroundColorCursor: (color: string) =>
          setCursorSettings((prev) => ({
            ...prev,
            backgroundColorCursor: color,
          })),
        setBackgroundColorBorder: (color: string) =>
          setCursorSettings((prev) => ({
            ...prev,
            backgroundColorBorder: color,
          })),
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

const CursorAnimation: React.FC = () => {
  const {
    cursorPos,
    outOfBounds,
    content,
    size,
    borderSize,
    borderBackgroundSize,
    show,
    backgroundColorCursor,
    backgroundColorBorder,
  } = useCursor();

  return (
    <>
      <div
        className="mouse-circle"
        style={{
          width: size,
          height: size,
          transform: `translate(${cursorPos.x - size / 2}px, ${cursorPos.y - size / 2}px)`,
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
