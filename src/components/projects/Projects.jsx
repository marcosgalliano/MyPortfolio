import style from "./Projects.module.css";
import { projects } from "../../utils/skillsData";

const Projects = () => {
  return (
    <div className={style.divProjects}>
      <h3>Top Projects</h3>
      <div className={style.divProjectsMap}>
        {projects.map((proj) => {
          return (
            <div className={style.divProject}>
              <img src={proj.img} alt="project" />
              <h2>{proj.name}</h2>
              <h4>{proj.origin}</h4>
              <h5>{proj.description}</h5>
              <h6>{proj.tech}</h6>
              <a href={proj.link}>
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
