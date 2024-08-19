import Navbar from "./components/navigation/Navbar";
import Welcome from "./components/Welcome";
import CircleImg from "./components/sub-components/CircleImg";
import About from "./components/About";
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
      <div className="flex flex-col justify-center my-36">
        <CircleImg size="medium" img="makara-ui.png" />
        <CircleImg size="large" img="compfest.jpeg" />
      </div>
    </>
  );
}

export default App;
