import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";

function App() {

  return (
    <div>
     <NavBar />
     <Hero />
     <About />
     <div className="mt-24">
      <Technologies />
     </div>
    </div>
  );
}

export default App;


