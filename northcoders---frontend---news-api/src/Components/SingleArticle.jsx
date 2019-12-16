import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";
import CommentsList from "./CommentsList";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: ""
  };

  getArticle = () => {
    api
      .fetchArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        this.setState({ err: data.err, isLoading: false });
      });
  };

  componentDidMount() {
    this.getArticle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      this.getArticle();
    }
  }

  render() {
    const { err } = this.state;
    if (this.state.isLoading) return <Loader />;
    const {
      article_id,
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count
    } = this.state.article;
    if (err) return <ErrDisplayer err />;

    return (
      <article>
        <h2>
          {article_id}.{title}
        </h2>
        <h3>Author: {author}</h3>
        <h3>Created: {created_at}</h3>
        <h3>Votes: {votes}</h3>
        <h3>Topic: {topic}</h3>
        <h2>{body}</h2>
        <h3>Comments: {comment_count}</h3>
        <CommentsList article_id={article_id} />
      </article>
    );
  }
}

export default SingleArticle;
