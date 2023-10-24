import style from "./Navbar.module.css";
import pdf from "../../pdf/curriculum.pdf";

const NavBar = () => {
  const redirectToAbout = () => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const redirectToContact = () => {
    const aboutSection = document.getElementById("contact");
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
          <a href="https://github.com/marcosgalliano" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-galliano-436220223/"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href={pdf} target="_blank">
            <ion-icon name="id-card-outline"></ion-icon>
          </a>
        </div>
        <div className={style.idButtons}>
          <button onClick={redirectToAbout}>More</button>
          <button onClick={redirectToContact}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
