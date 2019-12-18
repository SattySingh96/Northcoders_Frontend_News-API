import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router'
import ArticleList from './Components/ArticleList'
import SingleArticle from './Components/SingleArticle'
import TopicList from './Components/TopicList';
import ErrDisplayer from './Components/ErrDisplayer';
import ArticleListByTopic from './Components/ArticleListByTopic';
import { render } from '@testing-library/react';


class App extends Component {
  state = {
    username: 'tickle122'
  };

  render() {
    return (
    <div className="App">
      <Header username={this.state.username}/>     
      <Router>
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
