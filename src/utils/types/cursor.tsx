import { ReactNode } from "react";

export interface CursorSettings {
    content: string;
    cursorSize: number;
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
  
  export interface CursorContextType extends CursorSettings {
    handleMouseEnterAnimation: () => void;
    handleMouseLeaveAnimation: () => void;
    setCursorContent: (content: string) => void;
    setCursorSize: (size: number) => void;
    setBorderSize: (borderSize: number) => void;
    setBorderBackgroundSize: (size: number) => void;
    toggleShow: () => void;
    setBackgroundColorCursor: (color: string) => void;
    setBackgroundColorBorder: (color: string) => void;
  }
  
  export interface CursorProviderProps {
    children: ReactNode;
  }