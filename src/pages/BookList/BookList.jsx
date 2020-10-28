import React from 'react';
import SearchBar from '../../components/SearchBar';
import BookCard from '../../components/BookCard';
import { Wrapper, Grid } from './styles';

function BookList() {
  return (
    <Wrapper>
      <SearchBar />
      <Grid>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </Grid>
    </Wrapper>
  );
}

export default BookList;
