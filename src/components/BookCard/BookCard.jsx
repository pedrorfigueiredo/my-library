import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, readBook } from '../../store/ducks/reducer';
import {
  Wrapper,
  Title,
  Author,
  Year,
  DeleteButton,
  ReadState,
} from './styles';

function BookCard({ id, title, author, year, isRead, monthRead, yearRead }) {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(removeBook(id));
  };

  const handleReadBook = () => {
    if (isRead === true) {
      return;
    }
    const newDate = new Date();
    dispatch(readBook(id, newDate));
  };

  return (
    <Wrapper isRead={isRead}>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Year>{year}</Year>
      <DeleteButton onClick={handleDeleteBook} />
      {isRead ? (
        <ReadState isRead={isRead} onClick={handleReadBook}>
          Lido - {monthRead}/{yearRead}
        </ReadState>
      ) : (
        <ReadState isRead={isRead} onClick={handleReadBook}>
          Não lido
        </ReadState>
      )}
    </Wrapper>
  );
}

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isRead: PropTypes.bool.isRequired,
  monthRead: PropTypes.string,
  yearRead: PropTypes.number,
};

BookCard.defaultProps = {
  title: 'Título não informado',
  author: 'Autor não informado',
  year: 'Ano não informado',
  monthRead: undefined,
  yearRead: undefined,
};

export default BookCard;
