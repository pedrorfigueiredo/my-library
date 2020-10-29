import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Author, Year } from './styles';

function BookCard({ title, author, year }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Year>{year}</Year>
    </Wrapper>
  );
}

BookCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.number,
};

BookCard.defaultProps = {
  title: 'Título não informado',
  author: 'Autor não informado',
  year: 'Ano não informado',
};

export default BookCard;
