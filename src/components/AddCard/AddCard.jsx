import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Author, Year } from './styles';

function AddCard({ title, author, year }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Year>{year}</Year>
    </Wrapper>
  );
}

AddCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.string,
};

AddCard.defaultProps = {
  title: 'Título não informado',
  author: 'Autor não informado',
  year: 'Ano não informado',
};

export default AddCard;
