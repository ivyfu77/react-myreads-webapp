import React from 'react';
import Book from './Book';

/**
 * Define the shelf component containing title and books in this shelf
 */
class BookShelf extends React.Component {

  render() {
    let mappedBooks = this.props.books.map((book) => {
      //The Book key in main page will be 'shelfName(without spaces)-bookId'
      return (
        <Book
          key={this.props.shelfName.replace(/ /g,'')+"-"+book.id}
          onChangeShelf={this.props.onChangeShelf}
          book={book} />        
      );
    });

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {mappedBooks}
          </ol>
        </div>
      </div>
    );
  }

}

export default BookShelf;