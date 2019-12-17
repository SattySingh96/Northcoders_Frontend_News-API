import React from "react";
import * as api from "../utils/api";

const DeleteComment = ({ comment_id, getComments }) => {
  const handleSubmit = event => {
    event.preventDefault();
    api.deleteComment(comment_id).then(() => {
      getComments();
    });
  };
  return (
    <div>
      <button onClick={handleSubmit}>Delete</button>
    </div>
  );
};

export default DeleteComment;
