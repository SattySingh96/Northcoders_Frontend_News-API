import React, { Component } from "react";
import * as api from '../utils/api'

class SingleArticle extends Component {
  state ={
    article: {},
  }

  getArticle= () => {
    api.fetchArticle(this.props.article_id)
    .then((article) => { 
      this.setState({article});
    });
  }

  






  render() {
    return <div><h1>  ARTICLE</h1></div>;
  }
}

export default SingleArticle;
