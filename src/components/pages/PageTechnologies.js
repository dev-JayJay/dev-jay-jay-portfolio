import React from "react";
import TechnologiesCard from "../molecules/TechnologiesCard";

const PageTechnologies = () => {
  return (
    <div className="TechnologyWrapper">
      <h5>Technologies</h5>
      <div className="TechnologyContainer">
        {Technology.map((tech, index) => (
          <div key={index}>
            <TechnologiesCard icon={tech.icon} text={tech.lang} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageTechnologies;

const Technology = [
  {
    icon: "<>",
    lang: "HTML",
  },
  {
    icon: "#",
    lang: "CSS",
  },
  {
    icon: "</>",
    lang: "JavaScript",
  },
  {
    icon: "</>",
    lang: "Git",
  },
  {
    icon: "#",
    lang: "React",
  },
  {
    icon: "#",
    lang: "Tailwind",
  },
  {
    icon: "#",
    lang: "Next Js",
  },
  {
    icon: "#",
    lang: "TS",
  },
  {
    icon: "#",
    lang: "Styled Components",
  },
  {
    icon: "#",
    lang: "Redux",
  },
  {
    icon: "#",
    lang: "PHP",
  },
  {
    icon: "#",
    lang: "MySql",
  },
];
