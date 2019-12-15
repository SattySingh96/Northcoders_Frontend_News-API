import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";
import {Router} from '@reach/router'
import Loader from "./Loader";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  getArticles = () => {
    api.fetchAllArticles().then(articles => {     
      this.setState({ articles, isLoading : false });
    });
  };

  componentDidMount() {
    console.log("Mounting");
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updating')
    if (prevProps.title !== this.props.title) {
      this.getArticles();
    }
  }


  render() {
    console.log("Rendering");
    if (this.state.isLoading) return <Loader/>
    return (
      <div>
        {this.state.articles.map(article => {          
          return <ArticleCard key={article.article_id} {...article} />;
        })}
        <Router>
          <SingleArticle path=':article_id' />
        </Router>
      </div>
    );
  }
}

export default ArticleList;
