import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";

class SingleTopic extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: ""
  };

  getArticles = () => {
    api
      .fetchAllArticles(this.props.slug)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        console.log(data.err)
        this.setState({ err: data.err, isLoading: false });
      });
  };

  componentDidMount() {
    this.getArticle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticle();
    }
  }

  render() {
    const { err } = this.state;
    if (err) return <ErrDisplayer err />;
    if (this.state.isLoading) return <Loader />;
    const { title } = this.state.articles;
    
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default SingleTopic;
