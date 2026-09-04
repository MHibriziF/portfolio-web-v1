import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navigation/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Socials";
import Footer from "./components/Footer";
import CircleImg from "./components/sub-components/CircleImg";
import { profile } from "./data/portfolio";
import "./styles/App.css";

function App() {
  useEffect(() => {
    // `once` keeps sections from re-animating on every scroll pass. All
    // reveals are vertical/opacity only, so they cannot widen the page.
    AOS.init({ once: true, duration: 1000, offset: 80 });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 overflow-x-clip">
        <Welcome />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contacts />

        <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
          <CircleImg size="large" img="/heart.jpg" name={profile.name} />
          <h2 className="mt-4 font-poppins text-3xl font-bold text-white md:text-5xl">
            Thank you!
          </h2>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
