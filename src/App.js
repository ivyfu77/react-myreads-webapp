import React from 'react';
import { Route, Link } from 'react-router-dom';
import Shelves from './components/Shelves';
import Search from './components/Search';
import * as BooksAPI from './utils/BooksAPI';
import './style/App.css';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Shelves} />
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
