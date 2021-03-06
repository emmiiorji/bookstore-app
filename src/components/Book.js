import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import ShowProgress from './ShowProgress';

const Book = (props) => {
  const {
    category, title, author, id,
  } = props;

  const dispatch = useDispatch();

  const randIntegerGen = (max) => Math.floor(Math.random() * max);
  const progress = { completedPercent: randIntegerGen(101), currentChapter: `Chapter ${randIntegerGen(30) + 1}` };
  const { completedPercent, currentChapter } = progress;

  return (
    <div className="bookContainer">
      <div style={{ display: 'flex,', flexDirection: 'column' }}>
        <ul>
          <li className="category">{category}</li>
          <li className="title">{title}</li>
          <li className="author">{author}</li>
        </ul>
        <div className="reactionsContainer">
          <button type="button" className="reaction">Comments</button>
          <button type="button" className="reaction middle" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="reaction">Edit</button>
        </div>
      </div>
      <ShowProgress currentChapter={currentChapter} completedPercent={completedPercent} />
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
