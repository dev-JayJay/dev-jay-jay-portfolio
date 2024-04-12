import "./style.css";
import React from "react";

function CommentCard({image, name, role, comment}) {
  return (
    <div className="CommentWrapper">
      <div className="CommentContainer">
        <img src={image} alt={name}/>
        <div className="CommentText">
            <h5>{name}</h5>
            <span>{role}</span>
            <p>{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
