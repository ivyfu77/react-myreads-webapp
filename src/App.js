import React from 'react';
import { Route } from 'react-router-dom';
import Shelves from './components/Shelves';
import Search from './components/Search';
import * as BooksAPI from './utils/BooksAPI';
import './style/App.css';

class BooksApp extends React.Component {
  state = {
    mybooks: []
  }
  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ mybooks: books });
    })
  }

  onChangeShelf(e) {
    e.preventDefault();
    let self = this;
    let toShelf = e.target.value;
    BooksAPI.get(e.target.name).then((book) =>{
      BooksAPI.update(book, toShelf)
        .then((res) => {
          //console.log(res);
          BooksAPI.getAll().then((books) => {
            //console.log(books);
            self.setState({ mybooks: books });
          })
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
