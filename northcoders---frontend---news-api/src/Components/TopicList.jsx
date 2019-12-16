import React, { Component } from "react";
import * as api from "../utils/api";
import TopicCard from "./TopicCard";
import Loader from "./Loader";

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  getTopics = () => {
    api.fetchAllTopics().then(topics => {
      this.setState({ topics, isLoading: false });
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
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        {this.state.topics.map(topic => {
          return <TopicCard key={topic.slug} {...topic} />;
        })}
      </div>
    );
  }
}

export default TopicList;
