import React from "react";

const CommentCard = ({ comment_id, body, author, votes, created_at }) => {
  return (
    <article>
      <ul>
        <li>
          <strong>Comment written by {author}:</strong> {body} Votes: {votes}
        </li>
      </ul>
    </article>
  );
};

export default CommentCard;
