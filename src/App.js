import "./App.css";
import { useState } from "react";
import PageFooter from "./components/pages/PageFooter";
import PageHero from "./components/pages/PageHero";
import PageAbout from "./components/pages/PageAbout";
import Button from "./components/atoms/button";
import {
  FaSquareGithub,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareFacebook,
} from "react-icons/fa6";
import PageTechnologies from "./components/pages/PageTechnologies";
import PageComment from "./components/pages/PageComment";
import PageProject from "./components/pages/PageProject";

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="App">
      <div className={`SideBar ${showMenu ? "" : "show"}`}>
        <img className="Profile" src="/image/newJay.png" alt="ProfileImage" />
        <ul>
          {nav.map((item, index) => (
            <>
              <li key={index}>
                <a href={item.route}>{item.link}</a>
              </li>
            </>
          ))}
          <div className="AppIconsWrapper">
            <a href="https://web.facebook.com/profile.php?id=100073913353405">
              <FaSquareFacebook />
            </a>
            <a href="https://www.instagram.com/favouringjay/">
              <FaSquareInstagram />
            </a>
            <a href="https://twitter.com/favouringjay/">
              <FaSquareXTwitter />
            </a>
            <a href="https://github.com/dev-jay-jay/">
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
        <PageHero id="#Home" />
        <PageAbout id="#About"/>
        <PageTechnologies id="#Portfolio" />
        <PageProject id="#Resume" />
        <PageComment id="#About" />
        <PageFooter id="#About" />
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
