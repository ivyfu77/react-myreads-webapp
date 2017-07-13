import React from 'react';
import { Route } from 'react-router-dom';
import Shelves from './components/Shelves';
import Search from './components/Search';
import * as BooksAPI from './utils/BooksAPI';
import './style/App.css';

class BooksApp extends React.Component {
  state = {
    mybooks: [],
    allbooks: []
  }
  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ mybooks: books });
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Shelves
            initBooks={this.state.mybooks}
          />
        )} />
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
