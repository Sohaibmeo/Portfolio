import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";
import {
  CursorContextType,
  CursorProviderProps,
  CursorSettings,
} from "../utils/types/cursor";

const CursorContext = createContext<CursorContextType | null>(null);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorSettings, setCursorSettings] = useState<CursorSettings>({
    content: "",
    cursorSize: 10,
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

  const handleMouseEnterAnimation = useCallback(() => {
    document.addEventListener("mousemove", handleMouseAnimation);
  }, [handleMouseAnimation]);

  const handleMouseLeaveAnimation = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseAnimation);
  }, [handleMouseAnimation]);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseLeaveAnimation);
    };
  }, []);

  return (
    <CursorContext.Provider
      value={{
        ...cursorSettings,
        handleMouseEnterAnimation,
        handleMouseLeaveAnimation,
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
        toggleShow: () =>
          setCursorSettings((prev) => ({ ...prev, borderSize: prev.borderSize > 0 ? 0 : 40 })),
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

export default CursorProvider;
