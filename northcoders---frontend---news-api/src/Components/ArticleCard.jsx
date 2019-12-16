import React from "react";
import { Link } from "@reach/router";
import CommentCard from "./CommentCard";

const ArticleCard = ({ article_id, title }) => {
  return (
    <article>
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
    </article>
  );
};

export default ArticleCard;
