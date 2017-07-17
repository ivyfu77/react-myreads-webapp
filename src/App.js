import React from 'react';
import { Route } from 'react-router-dom';
import Shelves from './components/Shelves';
import Search from './components/Search';
import * as BooksAPI from './utils/BooksAPI';
import './style/App.css';

/**
 * Define the root component of myReads App
 */
class BooksApp extends React.Component {

  // Use mybooks to store all the books in my shelves
  state = {
    mybooks: []
  }

  // Get all my books stored it in state.mybooks before rendering the DOM
  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ mybooks: books });
    })
  }

  // Define the change-shelf event handler in root component
  // Make sure it can be used both in Shelves and Search components
  // Will be passed to the very end child dropdown-list component: ChangeShelf
  onChangeShelf(e) {
    e.preventDefault();
    let self = this;
    let toShelf = e.target.value;
    BooksAPI.update(e.target.name, toShelf)
      .then((res) => {
        BooksAPI.getAll().then((books) => {
          self.setState({ mybooks: books });
        })
      })      
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Shelves
            initBooks={this.state.mybooks}
            onChangeShelf={(e) => this.onChangeShelf(e)}
          />
        )} />
        <Route path="/search" render={() => (
          <Search
            mybooks={this.state.mybooks}
            onChangeShelf={(e) => this.onChangeShelf(e)}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
