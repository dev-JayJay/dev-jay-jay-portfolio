import React from "react";
import CommentCard from "../molecules/CommentCard";

const PageComment = () => {
  return (
    <div className="commentWrapper">
        <h5>Reviews & Comments</h5>
      <div className="commentcontainer">
        {comment.map((item, index) => (
          <div key={index}>
            <CommentCard
              image={item.image}
              name={item.name}
              role={item.role}
              comment={item.comment}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageComment;

const comment = [
//   {
//     image: "/image/hero1.png",
//     name: "Ja hhhy",
//     role: "SoftWare",
//     comment: "I'm John Jonathan Gaiya, a cool-headed Software Developer and avid learner. I'm passionate about growth, both for myself and others. Let's code and grow together!",
//   },
//   {
//     image: "/image/hero1.png",
//     name: "Ja hhhy",
//     role: "SoftWare",
//     comment: "I'm John Jonathan Gaiya, a cool-headed Software Developer and avid learner. I'm passionate about growth, both for myself and others. Let's code and grow together!",
//   },
  {
    image: "/image/hero1.png",
    name: "Ja hhhy",
    role: "SoftWare",
    comment: "jdlmnds.k klsn;bdjbjsabl kblkd",
  },
  {
    image: "/image/hero1.png",
    name: "Ja hhhy",
    role: "SoftWare",
    comment: "jdlmnds.k klsn;bdjbjsabl kblkd",
  },
  {
    image: "/image/hero1.png",
    name: "Ja hhhy",
    role: "SoftWare",
    comment: "jdlmnds.k klsn;bdjbjsabl kblkd",
  },
  {
    image: "/image/hero1.png",
    name: "Ja hhhy",
    role: "SoftWare",
    comment: "jdlmnds.k klsn;bdjbjsabl kblkd",
  },
];
