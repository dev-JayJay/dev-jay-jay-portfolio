import "./App.css";
import PageFooter from "./components/pages/PageFooter";
import PageHero from "./components/pages/PageHero";

function App() {
  return (
    <div className="App">
      <div className="PageWrapper">
        <PageHero />
        <PageFooter />
      </div>
    </div>
  );
}

export default App;
