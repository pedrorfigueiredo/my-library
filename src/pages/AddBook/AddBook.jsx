import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import AddCard from '../../components/AddCard';
import Loader from '../../components/Loader';
import { Wrapper, Title, Grid, Error } from './styles';

function AddBook() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBooks([]);
    setLoading(true);
    const res = await axios.get(
      `http://openlibrary.org/search.json?q=${query}`
    );
    console.log(res.data.docs);
    if (res.data.docs.length < 1) {
      setLoading(false);
      return setError('Livro não encontrado');
    }
    setLoading(false);
    setError('');
    return setBooks(res.data.docs.slice(0, 5));
  };

  return (
    <Wrapper>
      <Title>Insira o título do livro</Title>
      <SearchBar
        value={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {loading && <Loader />}
      {!loading && error && <Error>{error}</Error>}
      <Grid>
        {books.map((book) => (
          <AddCard
            title={book.title}
            author={book.author_name}
            year={book.first_publish_year}
          />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default AddBook;
