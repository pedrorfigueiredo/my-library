import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import BookCard from '../../components/BookCard';
import { Wrapper, Grid } from './styles';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <Wrapper>
      <SearchBar />
      <Grid>
        {books.map((book) => (
          <BookCard title={book.title} author={book.author} year={book.year} />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default BookList;
