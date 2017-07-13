import React from 'react';

class ChangeShelf extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  }

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