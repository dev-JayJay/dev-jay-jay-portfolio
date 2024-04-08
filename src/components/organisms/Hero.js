import "./style.css";
import React from "react";

const Hero = () => {
  return (
    <div className="HeroWrapper">
      <div className="HeroContainer">
        <div className="TextSection">
          <h5>
            {" "}
            Hello! I'm <span>John Jonathan,</span>
          </h5>
          <p>
            a passionate and creative web developer. I specialize in crafting
            beautiful and responsive websites using the latest technologies.
            With a keen eye for design and a love for coding, I strive to create
            engaging digital experiences that leave a lasting impression. <br />{" "}
            Whether you're looking to build a stunning website for your business
            or need help with web development projects, you've come to the right
            place. Feel free to explore my portfolio and get in touch to discuss
            how I can bring your ideas to life.
          </p>
          <div className="Icons">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="ImageSection">
          <img src="/image/jayjay.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
