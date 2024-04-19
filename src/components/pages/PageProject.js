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
    <div id="Project" className="ProjectPageWrapper">
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
            link={item.link}
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
        img: "/image/schovelaVersion1.1.png",
      },
      {
        img: "/image/version2.png",
      },
      {
        img: "/image/schovelaVersion1.2.png",
      },
    ],
    name: "Schovela Landing Page Version 1 & 2",
    link : "https://github.com/dev-jay-jay/SchoVela",
    content:
      "Free And Seamless Access To Educational Resoures Including High Quality Pdfs, Images And Videos.Elevate Your Educational Journey With Schovela - Where Innovation Meets Education.",
    technologies: [
      {
        icon: "#",
        text: "React",
      },
      {
        icon: "#",
        text: "Tailwind css",
      },
      {
        icon: "#",
        text: "Next",
      },
      {
        icon: "#",
        text: "CSS",
      },
      {
        icon: "#",
        text: "Styled Component",
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
    name: "Tidmuv Web Application",
    link : "https://tidmuv-web.vercel.app/",
    content:
      "A platform that connects senders and travelers, ensuring that parcels reach their destination with speed, security, and ease. The Tidmuv community redefine the way you send and receive packages.",
    technologies: [
      {
        icon: "#",
        text: "Next",
      },
      {
        icon: "#",
        text: "Styled Component",
      },
      {
        icon: "#",
        text: "CSS",
      },
      {
        icon: "#",
        text: "Redux",
      },
      {
        icon: "#",
        text: "TypeScript",
      },
    ],
  },
  {
    image: [
      {
        img: "/image/real1.jpeg",
      },
      {
        img: "/image/real2.jpeg",
      },
      {
        img: "/image/real3.jpeg",
      },
    ],
    name: "Real Estate Management",
    link : "https://github.com/dev-jay-jay/Real-Estate-Project-",
    content:
      "Real Estate Management system (A Personal Project), facilitating property listings, client management, and transaction tracking. Streamlined processes, enhancing user experience and efficiency. Implemented features for property search, viewing and optimizing the real estate lifecycle.",
    technologies: [
      {
        icon: "#",
        text: "HTML",
      },
      {
        icon: "#",
        text: "CSS",
      },
      {
        icon: "#",
        text: "JavaScript",
      },
      {
        icon: "#",
        text: "BootStrap",
      },
      {
        icon: "#",
        text: "PHP",
      },
      {
        icon: "#",
        text: "MySql",
      },
    ],
  },
];
