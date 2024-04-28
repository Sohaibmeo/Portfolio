import SelfPortrait from "../assets/real2.png";

export default function getProjectData() {
  return [
    {
      title: "BuzzBridge",
      description:
        "A fullstack web application that allows user to upload questions within an existing topic or create a new topic. Users can also answer questions and upvote or downvote answers.",
      link: "https://buzzbridge.vercel.app/",
      techStack: ["React", "Nestjs", "Typescript", "Postgres", "TypeORM"],
      tag: "Fullstack",
      startDate: new Date("Feb 28, 2024"),
      github: "https://github.com/Sohaibmeo/BuzzBridge",
      background: "https://images.unsplash.com/photo-1517816428104-797678c7cf0c",
    },
    {
      title: "Investment On Wheels",
      description:
        "A marketplace for investing in properties. Users can buy, sell, and rent properties. The application also provides a platform for real estate agents to list their properties.",
      link: "#",
      techStack: ["React","Javascript", "Mui"],
      tag: "Frontend",
      startDate: new Date("Mar 14, 2023"),
      github: "https://github.com/Sohaibmeo/IOW-Frontend",
      background: "https://images.unsplash.com/photo-1635575623026-9b25cd510e4d",
    },
    {
      title: "Xfitness Gym Management",
      description:
        "A full stack application that allows gym owners to manage their members and trainers.",
      link: "#",
      techStack: ["React","Javascript", "Mui", "MongoDB", "Nodejs", "Express"],
      tag: "Fullstack",
      startDate: new Date("May 12, 2023"),
      github: "https://github.com/Sohaibmeo/gym-web",
      background: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51",
    },
    {
      title: "Portfolio",
      description:
        "A frontend application that showcases my projects and skills.",
      link: "#",
      techStack: ["React", "Typescript"],
      tag: "Frontend",
      startDate: new Date("April 25, 2024"),
      github: "https://github.com/Sohaibmeo/Portfolio",
      background: SelfPortrait,
    },
    {
      title: "Kanox Template Replica",
      description:
        "This is a replica of landing page of Kanox template which is available at ColorLib Kanox",
      link: "https://sohaibmeo.github.io/SohaibMao.github.io/",
      techStack: ["Html", "Css"],
      tag: "Frontend",
      startDate: new Date("Apr 25, 2022"),
      github: "https://github.com/Sohaibmeo/SohaibMao.github.io/tree/dev",
      background: "https://sohaibmeo.github.io/SohaibMao.github.io/xbanner_img.webp",
    },
  ];
}
