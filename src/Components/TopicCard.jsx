import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ slug, description }) => {
  return (
    <article className="TopicCard">
      <Link className="Link" to={`/articles/topic/${slug}`}>
        <h2>{slug.toUpperCase()}</h2>
      </Link>
      <p>{description}</p>
    </article>
  );
};

export default TopicCard;
