import React, { Component } from "react";
import * as api from "../utils/api";
import TopicCard from "./TopicCard";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: ""
  };

  getTopics = () => {
    api
      .fetchAllTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        this.setState({ err: data.msg, isLoading: false });
      });
  };

  componentDidMount() {
    this.getTopics();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.title !== this.props.title) {
      this.getTopics();
    }
  }

  render() {
    const { err, isLoading, topics } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrDisplayer err={err} />;
    return (
      <div>
        {topics.map(topic => {
          return <TopicCard key={topic.slug} {...topic} />;
        })}
      </div>
    );
  }
}

export default TopicList;
