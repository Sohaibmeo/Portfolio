

import getSkillData from "../../utils/getSkillData";
import "./skills.css";

//TODO: we can turn this into a crousal later on
const Skills = ({width}: {
    width: number | string;
}) => {
  const skills = getSkillData();
  console.log(skills)
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
