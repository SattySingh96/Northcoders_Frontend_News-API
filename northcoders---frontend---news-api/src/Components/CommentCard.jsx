import React from "react";

const CommentCard = ({ comment_id, body, author, votes, created_at }) => {
  return (
    <article>
      <ul>
        <li>
          Comment {comment_id} written by {author}: {body} Votes: {votes}
        </li>
      </ul>
    </article>
  );
};

export default CommentCard;
