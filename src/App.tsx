import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <section id="home" className="pt-20">
        <Home />
      </section>
      <section id="about" className="pt-20">
        <About />
      </section>
      <section id="projects" className="pt-20">
        <Projects />
      </section>
      <section id="resume" className="pt-20">
        <Resume />
      </section>
      <section id="contact" className="pt-20">
        <Contact />
      </section>
    </>
  );
}

export default App;
