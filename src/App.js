import "./App.css";
import NavBar from "./components/navbar/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
