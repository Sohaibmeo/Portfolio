import Html from "../assets/code-icons/html.svg";
import Css from "../assets/code-icons/css.svg";
import Javascript from "../assets/code-icons/javascript.svg";
import Typescript from "../assets/code-icons/typescript.svg";
import React from "../assets/code-icons/react.svg";
import Node from "../assets/code-icons/node.svg";
import NestJs from "../assets/code-icons/nestjs.svg";
import NextJs from "../assets/code-icons/nextjs.svg";
import MongoDB from "../assets/code-icons/mongodb.svg";
import Postgres from "../assets/code-icons/postgres.svg";
import Prisma from "../assets/code-icons/prisma.svg";
import AdobePS from "../assets/code-icons/adobeps.svg";
import Git from "../assets/code-icons/git.svg";
import Docker from "../assets/code-icons/docker.svg";
import TypeORM from "../assets/code-icons/typeorm.svg";
import Framer from "../assets/code-icons/framer.svg";
import Scss from "../assets/code-icons/scss.svg";
import Mui from "../assets/code-icons/mui.svg";

export default function getSkillData() {
  return [
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      img: Html,
      alt: "Html",
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      img: Css,
      alt: "Css",
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      img: Javascript,
      alt: "Javascript",
    },
    {
      link: "https://www.typescriptlang.org/",
      img: Typescript,
      alt: "Typescript",
    },
    { link: "https://reactjs.org/", img: React, alt: "React" },
    { link: "https://nodejs.org/en/", img: Node, alt: "Nodejs" },
    { link: "https://nestjs.com/", img: NestJs, alt: "Nestjs" },
    { link: "https://nextjs.org/", img: NextJs, alt: "Nextjs" },
    { link: "https://www.mongodb.com/", img: MongoDB, alt: "MongoDB" },
    { link: "https://www.postgresql.org/", img: Postgres, alt: "Postgres" },
    { link: "https://www.prisma.io/", img: Prisma, alt: "Prisma" },
    {
      link: "https://www.adobe.com/products/photoshop.html",
      img: AdobePS,
      alt: "AdobePs",
    },
    { link: "https://git-scm.com/", img: Git, alt: "Git" },
    { link: "https://www.docker.com/", img: Docker, alt: "Docker" },
    { link: "https://typeorm.io/", img: TypeORM, alt: "TypeORM" },
    { link: "https://www.framer.com/", img: Framer, alt: "Framer" },
    { link: "https://sass-lang.com/", img: Scss, alt: "Scss" },
    { link: "https://mui.com/", img: Mui, alt: "Mui" },
  ];
}

export const getSingleProjectData = (name: string) => {
  const projects = getSkillData();
  return projects.find((project) => project.alt === name);
};
