import Navbar from "./components/navigation/Navbar";
import Welcome from "./components/Welcome";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/App.css";

AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
    </>
  );
}

export default App;
