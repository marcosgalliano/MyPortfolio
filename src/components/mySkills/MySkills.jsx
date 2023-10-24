import style from "./MySkills.module.css";
import { useState } from "react";
import { frontSkills, backSkills, otherSkills } from "../../utils/skillsData";

const MySkills = () => {
  const [section, setSection] = useState("front");

  const handleSection = (value) => {
    setSection(value);
  };

  const renderSkills = () => {
    switch (section) {
      case "front":
        return frontSkills;
      case "back":
        return backSkills;
      case "others":
        return otherSkills;
      default:
        return [];
    }
  };

  return (
    <div className={style.divSkills}>
      <h2>My Skills</h2>
      <div className={style.skills}>
        <div className={style.divSections}>
          <button
            onClick={() => handleSection("front")}
            className={
              section === "front" ? style.activeSection : style.section
            }
          >
            <h4>Front-end</h4>
          </button>
          <button
            onClick={() => handleSection("back")}
            className={section === "back" ? style.activeSection : style.section}
          >
            <h4>Back-end</h4>
          </button>
          <button
            onClick={() => handleSection("others")}
            className={
              section === "others" ? style.activeSection : style.section
            }
          >
            <h4>Others</h4>
          </button>
        </div>
        <div className={style.sectionSkills}>
          {section === "front" ? (
            frontSkills.map((skill, index) => {
              return (
                <div className={style.divContenedorSkill} key={index}>
                  <h5>{skill.name}</h5>
                  <img src={skill.img} alt="skill" />
                </div>
              );
            })
          ) : section === "back" ? (
            backSkills.map((skill) => {
              return (
                <div className={style.divContenedorSkill}>
                  <h5>{skill.name}</h5>
                  <img src={skill.img} alt="skill" />
                </div>
              );
            })
          ) : (
            otherSkills.map((skill) => {
              return (
                <div className={style.divContenedorSkill}>
                  <h5>{skill.name}</h5>
                  <img src={skill.img} alt="skill" />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
