import React, { Component } from "react";
import * as api from '../utils/api'
import Loader from "./Loader";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  }

  getArticle= () => {
    api.fetchArticle(this.props.article_id)
    .then((article) => { 
      this.setState({ article, isLoading : false });
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
    if (this.state.isLoading) return <Loader/>;
    const {article_id, title, body, votes, topic, author, created_at, comment_count} = this.state.article;
    return (
    <article>
      <h2>{article_id}.{title}</h2>
      <h3>Author: {author}</h3>
      <h3>Created: {created_at}</h3>
      <h3>Votes: {votes}</h3>
      <h3>Topic: {topic}</h3>
      <p>{body}</p>
      <h3>Comments: {comment_count}</h3>
      </article>
    );
  }
}

export default SingleArticle;
