import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { Wrapper, Input, Button } from './styles';

function SearchBar({ value, handleChange, handleSubmit }) {
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input value={value} onChange={handleChange} />
      <Button type="submit">
        <AiOutlineSearch />
      </Button>
    </Wrapper>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

SearchBar.defaultProps = {
  value: null,
  handleChange: null,
  handleSubmit: null,
};

export default SearchBar;
