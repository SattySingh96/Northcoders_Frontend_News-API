import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticleCard = ({
  article_id,
  title,
  votes,
  comment_count,
  created_at
}) => {
  return (
    <article className="ArticleCard">
      <Link className="Link" to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <h2 id="ArticleComments">Comments: {comment_count}</h2>
      <h2>Created: {created_at.slice(0, 10)}</h2>
      <Voter
        className="ArticleCardVoter"
        id={article_id}
        type={"articles"}
        votes={votes}
      />
    </article>
  );
};

export default ArticleCard;
