import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../utils/BooksAPI';

class Search extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.search('l', 100)
    .then((books) => {
      if (books) {
        this.setState({ books: books.filter((book) => (book.imageLinks && book.imageLinks.smallThumbnail)) });
      }
    })
  }

  render() {
    let mappedBooks;
    if(this.state.books.length > 0) {
      mappedBooks = this.state.books.map((book) => {
        return (
          <Book key={book.id} book={book} />        
        );
      });
    }
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{mappedBooks}</ol>
        </div>
      </div>
    );
  }

}

export default Search;