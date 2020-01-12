import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router'
import ArticleList from './Components/ArticleList'
import SingleArticle from './Components/SingleArticle'
import TopicList from './Components/TopicList';
import ErrDisplayer from './Components/ErrDisplayer';
import ArticleListByTopic from './Components/ArticleListByTopic';
import HomePage from './Components/HomePage';


class App extends Component {
  state = {
    username: 'grumpy19'
  };

  render() {
    return (
      <div className="App">
        <Header username={this.state.username} />
        <Router>
          <HomePage path='/' />
          <TopicList path='/topics/*' />
          <ArticleList path='/articles/' />
          <ArticleList path='/articles/topic/:topic_slug' />
          <SingleArticle username={this.state.username} path='/articles/:article_id' />
          <ArticleListByTopic path='/articles' />
          <ErrDisplayer default />
        </Router>
      </div>
    );
  }
}

export default App;
