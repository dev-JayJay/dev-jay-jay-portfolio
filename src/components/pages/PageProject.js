import "./style.css";
import React from "react";
import ProjectCard from "../molecules/ProjectCard";

const PageProject = () => {
  return (
    <div className="ProjectPageWrapper">
      <h5>Projects And Colaborations</h5>
      <div className="ProjectPageContainer">
        {PageContent.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            name={item.name}
            content={item.content}
            technologies={item.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default PageProject;

const PageContent = [
  {
    image: "/image/check.png",
    name: "Schovela Version 1 & 2",
    content: "I'm John Jonathan Gaiya, a cool-headed Software Developer and avid learner. I'm passionate about growth, both for myself and others. Let's code and grow together!",
    technologies: [
      {
        icon : "</>",
        text : "One",
      },
      {
        icon : "#",
        text : "Two",
      },
      {
        icon : "</>",
        text : "Three",
      },
      {
        icon : "</>",
        text : "One",
      },
      {
        icon : "#",
        text : "Two",
      },
      {
        icon : "</>",
        text : "Three",
      },
    ],
  },
];
