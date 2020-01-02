import React from "react";
import * as api from "../utils/api";

const DeleteComment = ({ comment_id, getComments, author, username }) => {

  const handleSubmit = event => {
    event.preventDefault(); 
    if(author === username) {
      api.deleteComment(comment_id).then(() => {
        getComments();
      });  
    }       
  };
  return (
   
      <button id='DeleteButton' onClick={handleSubmit}>Delete</button>
  
  );
};

export default DeleteComment;
