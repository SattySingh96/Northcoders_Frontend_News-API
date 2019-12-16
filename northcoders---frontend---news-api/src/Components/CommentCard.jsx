import React from "react";

const CommentCard = ({ comment_id, body }) => {
  return (
    <article>
      <h2>{body}</h2>
    </article>
  );
};

export default CommentCard;
