import React from "react";
import DeleteComment from "./DeleteComment";
import Voter from "./Voter";

const CommentCard = ({
  comment_id,
  body,
  author,
  votes,
  created_at,
  getComments
}) => {
  return (
    <div id='CommentCard'>
      <ul>
        <li>
          <strong>Comment written by {author}:</strong> {body} 
          <strong>Votes: {votes}</strong>
          <DeleteComment comment_id={comment_id} getComments={getComments} />
          <Voter votes={votes} id={comment_id} type={'comments'} />
        </li>
      </ul>
    </div>
  );
};

export default CommentCard;
