import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, YearGroup, YearLabel, YearSelect, Message } from './styles';
import MonthStats from '../../components/MonthStats';

function Report() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [year, setYear] = useState(2020);
  const books = useSelector((state) => state.books);

  useEffect(() => {
    setFilteredBooks(books.filter((book) => book.yearRead === year));
  }, [year, books]);

  const handleChange = (e) => {
    // eslint-disable-next-line radix
    setYear(parseInt(e.target.value));
  };

  const yearsOptions = [];
  for (let i = 2020; i <= 2040; i += 1) {
    yearsOptions.push(i);
  }

  return (
    <Wrapper>
      <YearGroup>
        <YearLabel>Year:</YearLabel>
        <YearSelect value={year} onChange={handleChange}>
          {yearsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </YearSelect>
      </YearGroup>
      {filteredBooks.length > 0 ? (
        <MonthStats books={filteredBooks} />
      ) : (
        <Message>No read books for this year yet</Message>
      )}
    </Wrapper>
  );
}

export default Report;
