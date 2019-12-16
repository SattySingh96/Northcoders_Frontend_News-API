import React from "react";

const CommentCard = ({ comment_id, body }) => {
  return (
    <article>
      <ul>
        <li>
          <h4>{body}</h4>
        </li>
      </ul>
    </article>
  );
};

export default CommentCard;
