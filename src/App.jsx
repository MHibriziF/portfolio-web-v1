import Navbar from "./components/navigation/Navbar";
import Welcome from "./components/Welcome";
import CircleImg from "./components/sub-components/CircleImg";
import Projects from "./components/Projects";
import About from "./components/About";
import Contacts from "./components/Socials";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/App.css";

AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contacts />
      <div className="flex flex-row justify-center my-20">
        <CircleImg size="large" img="heart.jpg" />
      </div>
      <Footer />
    </>
  );
}

export default App;
