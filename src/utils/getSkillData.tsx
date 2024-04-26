import Html from "../assets/code-icons/html.png";
import Css from "../assets/code-icons/css.png";
import Javascript from "../assets/code-icons/javascript.png";
import Typescript from "../assets/code-icons/typescript.png";
import React from "../assets/code-icons/react.png";
import Node from "../assets/code-icons/node.png";
import NestJs from "../assets/code-icons/nestjs.png";
import NextJs from "../assets/code-icons/nextjs.png";
import MongoDB from "../assets/code-icons/mongodb.png";
import Postgres from "../assets/code-icons/postgres.png";
import Prisma from "../assets/code-icons/prisma.png";
import AdobePS from "../assets/code-icons/adobeps.png";
import Git from "../assets/code-icons/git.png";
import Docker from "../assets/code-icons/docker.png";
import TypeORM from "../assets/code-icons/typeorm.svg";
import Ruby from "../assets/code-icons/ruby.png";

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
      alt: "JavaScript",
    },
    {
      link: "https://www.typescriptlang.org/",
      img: Typescript,
      alt: "TypeScript",
    },
    { link: "https://reactjs.org/", img: React, alt: "React" },
    { link: "https://nodejs.org/en/", img: Node, alt: "Nodejs" },
    { link: "https://nestjs.com/", img: NestJs, alt: "NestJs" },
    { link: "https://nextjs.org/", img: NextJs, alt: "NextJs" },
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
    { link: "https://www.ruby-lang.org/en/", img: Ruby, alt: "Ruby" },
  ];
}
