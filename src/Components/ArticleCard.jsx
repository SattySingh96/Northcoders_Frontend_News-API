import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticleCard = ({
  article_id,
  title,
  votes,
  comment_count,
  created_at,
  author
}) => {
  return (
    <article className="ArticleCard">

      <h2 id='ArticleAuthor'>Posted by {author} on {created_at.slice(0,10)}</h2>

      <Link className="Link" to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>      

      <h2 id="ArticleComments">Comments: {comment_count}</h2>

      <div className='ArticleCardVoter'>

        <Voter        
        id={article_id}
        type={"articles"}
        votes={votes}
      /> 

      </div>  
              
    </article>
  );
};

export default ArticleCard;
