import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";
import { Router } from "@reach/router";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: ""
  };

  getArticles = () => {
    api
      .fetchAllArticles(this.props.topic_slug)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        this.setState({ err: data.err, isLoading: false });
      });
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.getArticles();
    }
  }

  render() {
    const { err } = this.state;
    if (this.state.isLoading) return <Loader />;
    if (err) return <ErrDisplayer err />;
    return (
      <div>
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
        <Router>
          <SingleArticle path=":article_id" />
        </Router>
      </div>
    );
  }
}

export default ArticleList;
