import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../../store/ducks/reducer';
import { Wrapper, Title, Author, Year, OkMark } from './styles';

function AddCard({ id, title, author, year }) {
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();
  const book = { id, title, author, year, isRead: false };

  const handleAddBook = () => {
    if (isAdd) {
      dispatch(removeBook(id));
      setIsAdd(false);
      return;
    }
    dispatch(addBook(book));
    setIsAdd(true);
  };

  return (
    <Wrapper key={id} isAdd={isAdd} onClick={handleAddBook}>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Year>{year}</Year>
      {isAdd && <OkMark />}
    </Wrapper>
  );
}

AddCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.number,
};

AddCard.defaultProps = {
  title: 'Title not found',
  author: 'Author not found',
  year: 'Year not found',
};

export default AddCard;
