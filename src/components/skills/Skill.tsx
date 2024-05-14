

import getSkillData from "../../utils/getSkillData";
import "./Skill.css";

const Skills = ({width}: {
    width: number | string;
}) => {
  const skills = getSkillData();
  return (
    <div className="skills-img-container">
      {skills.map((skill, index) => {
        return (
            <a href={skill.link} target="_blank" key={index}>
            <img src={skill.img} width={width} className="icon-image" alt={skill.alt} />
          </a>
        );
      })}
    </div>
  );
};

export default Skills;
