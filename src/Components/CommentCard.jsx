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
    <div className='CommentCard'> 
      <div className='CommentInfo'>
        <strong>{author} says:</strong> {body} 
        <DeleteComment 
          comment_id={comment_id} 
          getComments={getComments}    
          author={author}       
          username={username}
          />  
      </div>
      <div className='CommentVotingSection'>
        <div className='CommentVoter'>
          <Voter votes={votes} id={comment_id} type={'comments'} />
        </div> 
      </div>
    </div>
  );
};

export default CommentCard;
