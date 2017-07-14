import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../utils/BooksAPI';

class Search extends React.Component {
  state = {
    books: []
  }

  componentWillReceiveProps(nextProps) {
    let query = document.getElementById('search-input').value;
    this.modifyShelfInfo(nextProps, query);
  }

  modifyShelfInfo(props, query) {
    const {mybooks} = props;
    let self = this;

    if (query !== '') {
      BooksAPI.search(query, 100)
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
              books: books.filter((book) => (book.imageLinks && book.imageLinks.smallThumbnail)) 
            });
          } else if (books && books.error === 'empty query') {
            self.setState({ 
              books: [] 
            });            
          }
        })    
    }
  }

  onClickSearch() {
    let query = document.getElementById('search-input').value;
    this.modifyShelfInfo(this.props, query);
  }

  render() {
    let mappedBooks;
    if(this.state.books.length > 0) {
      mappedBooks = this.state.books.map((book) => {
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
              onKeyDown={(event) => {if(event.keyCode==13) this.onClickSearch()}}
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