import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

/**
 * Define the main page component of myReads App
 */
class Shelves extends React.Component {

  render() {

    // The changed initBooks will pass by as a props from root BooksApp component
    const {initBooks} = this.props;

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ivy-btn name="Stencil Button"></ivy-btn>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfName="Currently Reading"
              onChangeShelf={this.props.onChangeShelf}
              books={ initBooks.filter((book) => (book.shelf === 'currentlyReading')) }
            />
            <BookShelf
              shelfName="Want to Read"
              onChangeShelf={this.props.onChangeShelf}
              books={ initBooks.filter((book) => (book.shelf === 'wantToRead')) }
            />
            <BookShelf
              shelfName="Read"
              onChangeShelf={this.props.onChangeShelf}
              books={ initBooks.filter((book) => (book.shelf === 'read')) }
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" >Add a book</Link>
        </div>
      </div>
    );
  }

}

export default Shelves;