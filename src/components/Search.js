import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../utils/BooksAPI';

/**
 * Define the search page component of myReads App
 */
class Search extends React.Component {

  // Use state.books to store the books searching results
  state = {
    books: []
  }

  // Will triggle this function when change a book's shelf
  componentWillReceiveProps(nextProps) {
    // Compare the nextProps and current props, in case the props have not changed
    let isSame = ( this.props.mybooks.toString() === nextProps.mybooks.toString() );
    if (!isSame) {
      let query = document.getElementById('search-input').value;
      this.modifyShelfInfo(nextProps, query);
    }
  }

  // Define a function to get the searching results and sync with mybooks
  modifyShelfInfo(props, query) {
    const {mybooks} = props;
    let self = this;

    if (query !== '') {
      BooksAPI.search(query)
        .then((books) => {
          if (books && books.length > 0) {
            if (mybooks) {
              for (let i=0; i<books.length; i++) {
                let exist = false;
                mybooks.map((mybook) => {
                  if (mybook.id === books[i].id) {
                    exist = true;
                    books[i].shelf = mybook.shelf;
                  }
                });
                if (!exist) {
                  books[i].shelf = "none";
                }
              }
            }
            self.setState({ 
              // Remove the results without imageLinks
              books: books.filter((book) => (book.imageLinks && book.imageLinks.smallThumbnail)) 
            });
          } else if (books && books.error === 'empty query') {
            // When no result return, empty the showing books
            self.setState({ 
              books: [] 
            });            
          }
        })
        .catch((err) => {
          console.error("Something wrong during the search: " + err);
        })
    }
  }

  // Define a function to handle:
  // - click search icon
  // - enter something in the input box
  onClickSearch() {
    let query = document.getElementById('search-input').value;
    this.modifyShelfInfo(this.props, query);
  }

  render() {
    let mappedBooks;
    if(this.state.books.length > 0) {
      mappedBooks = this.state.books.map((book) => {
        //The Book key in search page will be 'Book-bookId'
        return (
          <Book 
            key={"Book-"+book.id}
            book={book}
            onChangeShelf={this.props.onChangeShelf} />        
        );
      });
    }
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              id="search-input"
              type="text"
              onChange={() => this.onClickSearch()}
              placeholder="Search by title or author"/>
          </div>
          <div className="search-btn" onClick={() => this.onClickSearch()}></div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{
            (this.state.books.length > 0) ? mappedBooks : "No Results..."
          }</ol>
        </div>
        <div className="icon-license">Search Icon made by <a href="http://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }

}

export default Search;