import Navbar from "./components/navigation/Navbar";
import Welcome from "./components/Welcome";
import CircleImg from "./components/CircleImg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/App.css";

AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <div className="flex justify-center my-36">
        <CircleImg size="16" img="izi.jpg" />
        <CircleImg size="16" img="makara-ui.png" />
        <CircleImg size="16" img="compfest.jpeg" />
      </div>
    </>
  );
}

export default App;
