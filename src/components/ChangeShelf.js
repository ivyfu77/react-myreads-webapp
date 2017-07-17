import React from 'react';

/**
 * Define the move-to-shelf dropdown list component of each book
 */
class ChangeShelf extends React.Component {

  render() {

    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.shelf}
          name={this.props.bookId}
          onChange={this.props.onChangeShelf}>
          <option value="" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ChangeShelf;