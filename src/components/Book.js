import React from 'react';

class Book extends React.Component {

  render() {
    const {book} = this.props;
    let imgUrl = (book.imageLinks && book.imageLinks.smallThumbnail) ? book.imageLinks.smallThumbnail:"";
    let authorStr = (book.authors && book.authors.length > 0) ? 
      book.authors.map((author, index) => {
        return (
          (index+1 === book.authors.length) ? author : author+", "
        );
      }) : "";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+imgUrl+'")' }}></div>
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
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{authorStr}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;