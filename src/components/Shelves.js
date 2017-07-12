import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import * as BooksAPI from '../utils/BooksAPI';

class Shelves extends React.Component {
  state = {
    //books is array of book object
    books: []
  }

  componentWillMount() {

  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books });
    })
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              shelfName="Currently Reading"
              books={this.state.books.filter((book) => (book.shelf === 'currentlyReading'))}
            />
            <BookShelf 
              shelfName="Want to Read"
              books={this.state.books.filter((book) => (book.shelf === 'wantToRead'))}
            />
            <BookShelf 
              shelfName="Read"
              books={this.state.books.filter((book) => (book.shelf === 'read'))}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }

}

export default Shelves;