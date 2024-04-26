import Html from "../../assets/code-icons/html.png";
import Css from "../../assets/code-icons/css.png";
import Javascript from "../../assets/code-icons/javascript.png";
import Typescript from "../../assets/code-icons/typescript.png";
import React from "../../assets/code-icons/react.png";
import Node from "../../assets/code-icons/node.png";
import NestJs from "../../assets/code-icons/nestjs.png";
import NextJs from "../../assets/code-icons/nextjs.png";
import MongoDB from "../../assets/code-icons/mongodb.png";
import Postgres from "../../assets/code-icons/postgres.png";
import Prisma from "../../assets/code-icons/prisma.png";
import AdobePS from "../../assets/code-icons/adobeps.png";
import Git from "../../assets/code-icons/git.png";
import Docker from "../../assets/code-icons/docker.png";
import "./skills.css";


//TODO: we can turn this into a crousal later on
const Skills = ({width}: {
  width: string | number;
}) => {
  return (
    <div className="skills-img-container">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src={Html} width={width} className="icon-image" alt="Html" /></a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src={Css} width={width} className="icon-image" alt="Css" /></a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src={Javascript} width={width} className="icon-image" alt="Javascript" /></a>
      <a href="https://www.typescriptlang.org/" target="_blank"><img src={Typescript} width={width} className="icon-image" alt="Typescript" /></a>
      <a href="https://reactjs.org/" target="_blank"><img src={React} width={width} className="icon-image" alt="React" /></a>
      <a href="https://nodejs.org/en/" target="_blank"><img src={Node} width={width} className="icon-image" alt="Node" /></a>
      <a href="https://nestjs.com/" target="_blank"><img src={NestJs} width={width} className="icon-image" alt="NestJs" /></a>
      <a href="https://nextjs.org/" target="_blank"><img src={NextJs} width={width} className="icon-image" alt="NextJs" /></a>
      <a href="https://www.mongodb.com/" target="_blank"><img src={MongoDB} width={width} className="icon-image" alt="MongoDB" /></a>
      <a href="https://www.postgresql.org/" target="_blank"><img src={Postgres} width={width} className="icon-image" alt="Postgres" /></a>
      <a href="https://www.prisma.io/" target="_blank"><img src={Prisma} width={width} className="icon-image" alt="Prisma" /></a>
      <a href="https://www.adobe.com/products/photoshop.html" target="_blank"><img src={AdobePS} width={width} className="icon-image" alt="Adobe Photoshop" /></a>
      <a href="https://git-scm.com/" target="_blank"><img src={Git} width={width} className="icon-image" alt="Git" /></a>
      <a href="https://www.docker.com/" target="_blank"><img src={Docker} width={width} className="icon-image" alt="Docker" /></a>
    </div>
  );
};

export default Skills;
