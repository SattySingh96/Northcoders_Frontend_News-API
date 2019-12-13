import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router'
import ArticleList from './Components/ArticleList'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticleList path='/articles/*' />
      </Router>

    </div>
  );
}

export default App;
