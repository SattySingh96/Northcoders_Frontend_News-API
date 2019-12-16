import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router'
import ArticleList from './Components/ArticleList'
import SingleArticle from './Components/SingleArticle'
import TopicList from './Components/TopicList';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <TopicList path='/topics/*' />
        <ArticleList path='/articles/*' />
        <SingleArticle path='/article/:article_id' />
      </Router>

    </div>
  );
}

export default App;
