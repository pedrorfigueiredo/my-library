import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import { Wrapper, Title } from './styles';

function AddBook() {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(query);
  };

  return (
    <Wrapper>
      <Title>Insira o título do livro</Title>
      <SearchBar
        value={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Wrapper>
  );
}

export default AddBook;
