import style from "./Navbar.module.css";
import pdf from "../../pdf/curriculum.pdf";

const NavBar = () => {
  const redirectToAbout = () => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.divNavBar}>
      <div className={style.presentation}>
        <h2>Hi, my name is</h2>
        <span>Marcos José Galliano</span>
        <h2>I'm a Full Stack Developer</h2>
        <div className={style.icons}>
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
          <a href={pdf} target="_blank">
            <ion-icon name="id-card-outline"></ion-icon>
          </a>
        </div>
        <button onClick={redirectToAbout}>More</button>
      </div>
    </div>
  );
};

export default NavBar;
