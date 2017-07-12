import React from 'react';

class BookShelf extends React.Component {
  render() {
    let mappedBooks = this.props.books.map((book) => {
      return (
        <li key={book.name}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+book.url+'")' }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.name}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        </li>        
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