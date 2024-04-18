import "./style.css";
import React from "react";
import TechnologiesCard from "../molecules/TechnologiesCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
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

const ProjectCard = ({ image, name, content, technologies, link }) => {
  return (
    <div className="ProjectWrapper">
      <div className="ProjectContainer">
        <Carousel
          showDots={true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={10000}
          transitionDuration={400}
          infinite
          className="ProjectImageWrapper"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {image.map((item, index) => (
            <img
              key={index}
              className="ProjectImage"
              src={item.img}
              alt={name}
              // style={{
              //   backgroundImage: 'url(path/to/your/image.jpg)',
              //   backgroundSize: 'cover',
              //   backgroundPosition: 'center',
              //   backgroundRepeat: 'no-repeat'
              // }}
            />
          ))}
        </Carousel>
        <div className="ProjectTextContainer">
          <h5>{name}</h5>
          <p>{content}</p>
          <div>
            <span>Technologies Used</span>
            <div className="techWrapper">
              {technologies.map((lang, index) => (
                <div key={index}>
                  <TechnologiesCard icon={lang.icon} text={lang.text} />
                </div>
              ))}
            </div>
            <div className="projectButtonWrapper">
              <a href={link}>See Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
