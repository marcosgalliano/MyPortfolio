import style from "./Projects.module.css";
import { projects } from "../../utils/skillsData";

const Projects = () => {
  return (
    <div className={style.divProjects}>
      <h3>Top Projects</h3>
      <div className={style.divProjectsMap}>
        {projects.map((proj, index) => {
          return (
            <div className={style.divProject} key={index}>
              <img src={proj.img} alt="project" />
              <h2>{proj.name}</h2>
              <h4>{proj.origin}</h4>
              <h5>{proj.description}</h5>
              <h6>{proj.tech}</h6>
              <a href={proj.link} target="_blank">
                <ion-icon name="link-outline"></ion-icon> Visit
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
