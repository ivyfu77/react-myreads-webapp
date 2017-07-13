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

  }
  onChangeShelf(e) {
    e.preventDefault();
    let self = this;
    let toShelf = e.target.value;
    BooksAPI.get(e.target.name).then((book) =>{
      console.log(book);
      BooksAPI.update(book, toShelf)
        .then((res) => {
          console.log(res);
          BooksAPI.getAll().then((books) => {
            console.log(books);
            self.setState({ books });
          })
        })      
    })
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
              onChangeShelf={(e) => this.onChangeShelf(e)}
              books={
                (books.length > 0) ? books.filter((book) => (book.shelf === 'currentlyReading')) :
                  initBooks.filter((book) => (book.shelf === 'currentlyReading'))
              }
            />
            <BookShelf 
              shelfName="Want to Read"
              onChangeShelf={(e) => this.onChangeShelf(e)}
              books={
                (books.length > 0) ? books.filter((book) => (book.shelf === 'wantToRead')) :
                  initBooks.filter((book) => (book.shelf === 'wantToRead'))
              }
            />
            <BookShelf 
              shelfName="Read"
              onChangeShelf={(e) => this.onChangeShelf(e)}
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