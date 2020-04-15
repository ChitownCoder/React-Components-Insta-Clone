// You do not need to change any code in this file

import React from "react";
import "./Posts.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <h2>{props.username}</h2>
    </div>
  );
};

export default PostHeader;
















//* The winning formula was {props.title} in the Title.js. And {card.title} in the Card.js. I think I can actually complete this project now ****DELETE ME WHEN YOU ARE DONE*****/