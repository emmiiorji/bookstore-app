import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ShowProgress from './ShowProgress';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    category, title, author, id, progress,
  } = props;

  const dispatch = useDispatch();
  return (
    <div className="bookContainer">
      <ul>
        <li className="category">{category}</li>
        <li className="title">{title}</li>
        <li className="author">{author}</li>
      </ul>
      <div className="reactionsContainer">
        <button type="button" className="reaction">Comments</button>
        <button type="button" className="reaction" onClick={() => dispatch(removeBook(id))}>Remove</button>
        <button type="button" className="reaction">Edit</button>
      </div>
      <ShowProgress props={progress} />
    </div>
  );
};

const progressShape = {
  completedPercent: PropTypes.number,
  currentChapter: PropTypes.string,
  handleUpdateProgress: PropTypes.func,
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.shape(progressShape).isRequired,
};
export default Book;
