import { MotionStyle } from "framer-motion";

export interface ProjectCardProps {
    startDate: Date;
    title: string;
    description: string;
    techStack: string[];
    tag: string;
    link: string;
    github: string;
    background: string;
    style?: MotionStyle;
  };