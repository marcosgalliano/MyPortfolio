import React from "react";
import style from "./AboutMe.module.css";
import MySkills from "../mySkills/MySkills";

const AboutMe = () => {
  return (
    <div id="About" className={style.AboutDiv}>
      <h3>About me</h3>
      <div className={style.abouth4}>
        <h4>
          Hello, I'm Marcos! A passionate full-stack developer based in Buenos
          Aires, Argentina. After courses in JavaScript, Photoshop, and
          Illustrator, I found my passion in frontend development.
        </h4>
        <h4>
          I completed my training at Coderhouse and further specialized as a
          full-stack developer at SoyHenry, mastering ReactJS and other frontend
          technologies.
        </h4>
        <h4>
          Now, I'm seeking opportunities to apply and expand my skills in web
          development after successfully completing my training at SoyHenry.
        </h4>
      </div>
      <MySkills />
    </div>
  );
};

export default AboutMe;
