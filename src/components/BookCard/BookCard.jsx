import React from 'react';
import { Wrapper, Title, Author, Year } from './styles';

function BookCard() {
  return (
    <Wrapper>
      <Title>Lord of the Rings</Title>
      <Author>Tolkien</Author>
      <Year>1945</Year>
    </Wrapper>
  );
}

export default BookCard;
