import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
  componentWillMount() {

  }
  render() {
    let mappedBooks = this.props.books.map((book) => {
      return (
        <Book key={book.id} book={book} />        
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