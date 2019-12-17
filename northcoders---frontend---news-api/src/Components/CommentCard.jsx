import React from "react";
import DeleteComment from "./DeleteComment";

const CommentCard = ({
  comment_id,
  body,
  author,
  votes,
  created_at,
  getComments
}) => {
  return (
    <article>
      <ul>
        <li>
          <strong>Comment written by {author}:</strong> {body} Votes: {votes}
          <DeleteComment comment_id={comment_id} getComments={getComments} />
        </li>
      </ul>
    </article>
  );
};

export default CommentCard;
