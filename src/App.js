import "./App.css";
import NavBar from "./components/navbar/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
