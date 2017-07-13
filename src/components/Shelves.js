import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class Shelves extends React.Component {
  state = {
    //books is array of book object
    books: []
  }

  componentWillMount() {

  }

  componentDidMount() {

  }


  render() {
    const {initBooks} = this.props;
    const {books} = this.state;
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              shelfName="Currently Reading"
              onChangeShelf={this.props.onChangeShelf}
              books={
                (books.length > 0) ? books.filter((book) => (book.shelf === 'currentlyReading')) :
                  initBooks.filter((book) => (book.shelf === 'currentlyReading'))
              }
            />
            <BookShelf 
              shelfName="Want to Read"
              onChangeShelf={this.props.onChangeShelf}
              books={
                (books.length > 0) ? books.filter((book) => (book.shelf === 'wantToRead')) :
                  initBooks.filter((book) => (book.shelf === 'wantToRead'))
              }
            />
            <BookShelf 
              shelfName="Read"
              onChangeShelf={this.props.onChangeShelf}
              books={
                (books.length > 0) ? books.filter((book) => (book.shelf === 'read')) :
                  initBooks.filter((book) => (book.shelf === 'read'))
              }
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