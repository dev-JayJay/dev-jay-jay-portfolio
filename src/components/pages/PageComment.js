import React from "react";
import CommentCard from "../molecules/CommentCard";

const PageComment = () => {
  return (
    <div className="commentWrapper">
        <h5>Reviews & Comments</h5>
      <div className="commentcontainer">
        {comment.map((item, index) => (
            <CommentCard
            key={index}
              image={item.image}
              name={item.name}
              role={item.role}
              comment={item.comment}
            />
        ))}
      </div>
    </div>
  );
};

export default PageComment;

const comment = [
  {
    image: "/image/hero1.png",
    name: "Ja hhhy",
    role: "SoftWare",
    comment: "I'm John Jonathan Gaiya, a cool-headed Software Developer and avid learner. I'm passionate about growth, both for myself and others. Let's code and grow together!",
  },
  {
    image: "/image/hero1.png",
    name: "Femi Fatokun",
    role: "Software Engineer",
    comment: "Your software development skills are truly impressive! Your attention to detail, creativity, and problem-solving abilities shine through in every project. Keep up the fantastic work, you're making the internet a better place!",
  },
  {
    image: "/image/tolujohn.jpeg",
    name: "Tolu John ",
    role: "Full stack Software dev",
    comment: "John Jonathan is one the amazing software developers I’ve ever worked with, so fast in development, delivers   Product fast and always willing to learn and use new technologies.",
  },
  {
    image: "/image/hero1.png",
    name: "Samson Onifade",
    role: "Backend Developer",
    comment: "Your software development skills are impressive! The design is clean, the functionality is smooth, and the user experience is top-notch. Keep up the excellent work!",
  },
  {
    image: "/image/fronttrade.jpeg",
    name: "Samuel Adeniyi Oyeniran",
    role: "Frontend Developer",
    comment: "He's web application sleek design and seamless user experience are truly impressive! The attention to detail and innovative features showcase he's exceptional skills as a software developer. Keep up the fantastic work!",
  },
];
