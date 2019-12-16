import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router'
import ArticleList from './Components/ArticleList'
import SingleArticle from './Components/SingleArticle'
import TopicList from './Components/TopicList';
import ErrDisplayer from './Components/ErrDisplayer';
import SingleArticleByTopic from './Components/SingleArticleByTopic';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <TopicList path='/topics/*' />
        <ArticleList path='/articles/' />
        <ArticleList path='/articles/topic/:topic_slug' />
        <SingleArticle path='/articles/:article_id' />
        <SingleArticleByTopic path='/articles' />
        <ErrDisplayer default />
      </Router>
    </div>
  );
}

export default App;
