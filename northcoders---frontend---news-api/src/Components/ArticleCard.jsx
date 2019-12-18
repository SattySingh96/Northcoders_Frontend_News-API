import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticleCard = ({ article_id, title, votes }) => {
  return (
    <article className="ArticleCard">
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <Voter id={article_id} type={"articles"} votes={votes} />
    </article>
  );
};

export default ArticleCard;
