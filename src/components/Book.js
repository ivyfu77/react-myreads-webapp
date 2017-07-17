import React from 'react';
import ChangeShelf from './ChangeShelf';

// Import an external package to show the rating of a book
import StarRatingComponent from 'react-star-rating-component';


/**
 * Define the basic component of each book
 */
 class Book extends React.Component {

  render() {
    const {book} = this.props;
    let imgUrl = (book.imageLinks && book.imageLinks.smallThumbnail) ? book.imageLinks.smallThumbnail:"";
    let authorStr = (book.authors && book.authors.length > 0) ? 
      book.authors.map((author, index) => { // Use map to get all the authors combined string
        return (
          (index+1 === book.authors.length) ? author : author+", "
        );
      }) : "";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <a target="_blank" href={book.infoLink}><div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+imgUrl+'")' }}></div></a>
            <ChangeShelf
              shelf={book.shelf}
              bookId={book.id}
              onChangeShelf={this.props.onChangeShelf}/>
          </div>
          <div style={(book.averageRating) ? {} : {opacity: 0.3}}> 
            <StarRatingComponent
              name={book.id} 
              editing={false}
              starCount={5}
              value={(book.averageRating) ? book.averageRating : 0}
            />
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