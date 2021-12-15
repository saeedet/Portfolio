import About from "./components/about/About";
import Navbar from "./components/Navbar/Navbar";
import Particle from "./components/Particle";
import Projects from "./components/works/Projects";
import { useRef } from "react";

function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToWorks = (view) => {
    switch (view) {


      case "projects":
        projectsRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;


      case "about":
        aboutRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;

        
      default:
        return;
    }
  };

  return (
    <div className="App">
      <Navbar scrollToWorks={scrollToWorks} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      {/* <div style={{ height: "100vh" }}></div> */}
      {/* <Particle /> */}
    </div>
  );
}

export default App;
