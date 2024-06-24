import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
     <NavBar />
     <Hero />
     <About />
     <div className="mt-24">
      <Technologies />
     </div>
     <Project />
     <Comments />
     <Footer />
    </div>
  );
}

export default App;


