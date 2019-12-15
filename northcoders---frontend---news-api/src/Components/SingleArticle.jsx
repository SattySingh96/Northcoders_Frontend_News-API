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

  componentDidMount() {
    console.log("Mounting");
    this.getArticle();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updating single article')
    if (prevProps.article_id !== this.props.article_id) {
      this.getArticle();
    }
  }

  render() {
    return <div><h1>  ARTICLE</h1></div>;
  }
}

export default SingleArticle;
