import "./style.css";
import React from "react";
import TechnologiesCard from "../molecules/TechnologiesCard";

const ProjectCard = ({ image, name, content, technologies }) => {
  return (
    <div className="ProjectWrapper">
      <div className="ProjectContainer">
        <div className="ProjectImageWrapper">
          <img className="ProjectImage" src={image} alt={name} />
        </div>
        <div className="ProjectTextContainer">
          <h5>{name}</h5>
          <p>{content}</p>
          <div>
            <span>Technologies Used</span>
            <div className="techWrapper">
              {technologies.map((lang, index) => (
                <div key={index}>
                <TechnologiesCard
                  icon={lang.icon}
                  text={lang.text}
                />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
