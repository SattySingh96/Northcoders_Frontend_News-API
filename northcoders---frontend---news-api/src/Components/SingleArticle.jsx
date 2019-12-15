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
    const {article_id, title, body, votes, topic, author, created_at, comment_count} = this.state.article;
    return <div>
      <h2>{article_id}.{title}</h2>
      <h3>Author: {author}</h3>
      <h3>Created: {created_at}</h3>
      <h3>Votes: {votes}</h3>
      <h3>Topic: {topic}</h3>
      <p>{body}</p>
      <h3>Comments: {comment_count}</h3>
      </div>;
  }
}

export default SingleArticle;
