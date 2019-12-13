import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: []
  };

  getArticles = () => {
    api.fetchAllArticles().then(articlesList => {
      console.log(articlesList);
      this.setState({ articles: articlesList });
    });
  };

  componentDidMount() {
    console.log("Mounting");
    this.getArticles();
  }

  render() {
    console.log("Rendering");
    return (
      <div>
        {this.state.articles.map(article => {
          console.log(article);
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </div>
    );
  }
}

export default ArticleList;
