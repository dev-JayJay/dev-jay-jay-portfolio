import "./App.css";
import { useState } from "react";
import PageFooter from "./components/pages/PageFooter";
import PageHero from "./components/pages/PageHero";
import Button from "./components/atoms/button";
import {
  FaSquareGithub,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareFacebook,
} from "react-icons/fa6";

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="App">
      <div className={`SideBar ${showMenu ? "" : "show"}`}>
        <div className="Profile"></div>
        <ul>
          {nav.map((item, index) => (
            <>
              <li key={index}>
                <a href={item.route}>{item.link}</a>
              </li>
            </>
          ))}
          <div className="AppIconsWrapper">
            <a href="/">
              <FaSquareFacebook />
            </a>
            <a href="/">
              <FaSquareInstagram />
            </a>
            <a href="/">
              <FaSquareXTwitter />
            </a>
            <a href="/">
              <FaSquareGithub />
            </a>
            <a href="/">
              <FaLinkedin />
            </a>
          </div>
        </ul>
      </div>
      <div className={`PageWrapper ${showMenu ? "" : "ForPage"}`}>
        <div className="menu" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <Button text="&#9776;" /> : <Button text="&larr;" />}
        </div>
        <PageHero />
        <PageFooter />
      </div>
    </div>
  );
}

export default App;

const nav = [
  {
    link: "Home",
    route: "#Home",
  },
  {
    link: "About",
    route: "#About",
  },
  {
    link: "Portfolio ",
    route: "#Portfolio ",
  },
  {
    link: "Resume",
    route: "#Resume",
  },
  {
    link: "Contact",
    route: "#Contact",
  },
];
