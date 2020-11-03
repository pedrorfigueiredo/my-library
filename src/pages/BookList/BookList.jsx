import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../../components/BookCard';
import { Wrapper, Grid, Message } from './styles';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <Wrapper>
      <Grid>
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            isRead={book.isRead}
            monthRead={book.monthRead}
            yearRead={book.yearRead}
          />
        ))}
      </Grid>
      {books.length < 1 && <Message>Your collection is empty</Message>}
    </Wrapper>
  );
}

export default BookList;
