import "./style.css";
import React from "react";
import ProjectCard from "../molecules/ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PageProject = () => {
  return (
    <div className="ProjectPageWrapper">
      <h5>Projects And Colaborations</h5>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        transitionDuration={500}
        infinite
        className="ProjectPageContainer"
      >
        {PageContent.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            name={item.name}
            content={item.content}
            technologies={item.technologies}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default PageProject;

const PageContent = [
  {
    image: [
      {
        img: "/image/hero1.png",
      },
      {
        img: "/image/jayjay.jpeg",
      },
      {
        img: "/image/check.png",
      },
    ],
    name: "Schovela Version 1 & 2",
    content:
      "I'm John Jonathan Gaiya, a cool-headed Software Developer and avid learner. I'm passionate about growth, both for myself and others. Let's code and grow together!",
    technologies: [
      {
        icon: "</>",
        text: "One",
      },
      {
        icon: "#",
        text: "Two",
      },
      {
        icon: "</>",
        text: "check",
      },
      {
        icon: "</>",
        text: "One",
      },
      {
        icon: "#",
        text: "Two",
      },
      {
        icon: "</>",
        text: "Three",
      },
    ],
  },
  {
    image: [
      {
        img: "/image/hero1.png",
      },
      {
        img: "/image/jayjay.png",
      },
      {
        img: "/image/check.png",
      },
    ],
    name: "Schovela Version 1 & 2",
    content:
      "I'm John Jonathan Gaiya, a cool-headed Software Developer and avid learner. I'm passionate about growth, both for myself and others. Let's code and grow together!",
    technologies: [
      {
        icon: "</>",
        text: "Next",
      },
      {
        icon: "#",
        text: "Styled Component",
      },
      {
        icon: "</>",
        text: "Css",
      },
    ],
  },
  {
    image: [
      {
        img: "/image/hero1.png",
      },
      {
        img: "/image/jayjay.png",
      },
      {
        img: "/image/check.png",
      },
    ],
    name: "Schovela Version 1 & 2",
    content:
      "I'm John Jonathan Gaiya, a cool-headed Software Developer and avid learner. I'm passionate about growth, both for myself and others. Let's code and grow together!",
    technologies: [
      {
        icon: "</>",
        text: "Next",
      },
      {
        icon: "#",
        text: "Styled Component",
      },
      {
        icon: "</>",
        text: "Css",
      },
    ],
  },
];
