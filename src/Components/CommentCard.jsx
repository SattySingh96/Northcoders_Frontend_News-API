import React from "react";
import DeleteComment from "./DeleteComment";
import Voter from "./Voter";

const CommentCard = ({
  comment_id,
  body,
  author,
  votes,
  created_at,
  getComments,
  username
}) => {
  return (
    <div id='CommentCard'>
      <ul>
        <li>
          <strong>{author} says:</strong> {body}               
          <Voter votes={votes} id={comment_id} type={'comments'} />
          <DeleteComment 
          comment_id={comment_id} 
          getComments={getComments}    
          author={author}       
          username={username}
          />
        </li>
      </ul>
    </div>
  );
};

export default CommentCard;
