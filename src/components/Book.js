import React from 'react';
import ChangeShelf from './ChangeShelf';

class Book extends React.Component {
  componentWillMount() {

  }

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
            <ChangeShelf
              shelf={book.shelf}
              bookId={book.id}
              onChangeShelf={this.props.onChangeShelf}/>
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