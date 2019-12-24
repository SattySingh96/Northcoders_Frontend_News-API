import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";
import { Router } from "@reach/router";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";
import Sorter from "./Sorter";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: "",
    sortby: ""
  };

  getArticles = () => {
    api
      .fetchAllArticles(this.props.topic_slug, this.state.sortby)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        this.setState({ err: data.msg, isLoading: false });
      });
  };

  handleSortbyChange = criteria => {
    console.log(criteria);
    this.setState({ sortby: criteria }, () => {
      console.log(this.state);
      this.getArticles();
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
    if (err) return <ErrDisplayer err={err} />;
    return (
      <div className="ArticleList">
        <Sorter handleSortbyChange={this.handleSortbyChange} />
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
