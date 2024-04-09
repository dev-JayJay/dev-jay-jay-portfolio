import "./style.css";
import React from "react";
import Button from "../atoms/button";
import {
  FaSquareGithub,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareFacebook,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="HeroWrapper">
      <div className="HeroContainer">
        <div className="TextSection">
          <h5>
            {" "}
            Hello!
            <br /> I'm <span>John Jonathan,</span>
          </h5>
          <p>
            a passionate and creative web developer. I specialize in crafting
            beautiful and responsive websites using the latest technologies.
            With a keen eye for design and a love for coding, I strive to create
            engaging digital experiences that leave a lasting impression.
            Whether you're looking to build a stunning website for your business
            or need help with web development projects, you've come to the right
            place. Feel free to explore my portfolio and get in touch to discuss
            how I can bring your ideas to life.
          </p>
          <div className="ButtonWrapper">
            <Button text="Download Resume" />
            <Button text="Contact Me" />
          </div>
          <div className="IconsWrapper">
            <a href="/">
              <FaSquareFacebook />
            </a>
            <a href="/">
              <FaSquareInstagram  />
            </a>
            <a href="/">
              <FaSquareXTwitter />
            </a>
            <a href="/">
              <FaSquareGithub />
            </a>
            <a href="/">
              <FaLinkedin  />
            </a>
          </div>
        </div>
        <div className="ImageSection">
          <img className="ImageWrapper" src="/image/hero1.png" alt="heroImage" />
        </div>
      </div>
      {/* <p className="random one">#HTML</p>
      <p className="random two">#CSS</p>
      <p className="random three">#JAVASCRIPT</p>
      <p className="random four">#REACT</p>
      <p className="random five">#NEXT</p>
      <p className="random six">#PHP</p>
      <p className="random seven">#MySQL</p> */}
    </div>
  );
};

export default Hero;
