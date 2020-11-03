import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Average, Monthly } from './styles';

function MonthStats({ books }) {
  const [avg, setAvg] = useState();
  const [monthBooks, setMonthBooks] = useState([]);

  const countBooks = (array, month) => {
    const newArray = array.filter((item) => item.monthRead === month);
    return newArray.length;
  };

  const calculateAvg = (newMonthBooks) => {
    const nonZeroFiltered = newMonthBooks.filter((item) => item !== 0);
    // eslint-disable-next-line radix
    const sum = nonZeroFiltered.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    const result = sum / nonZeroFiltered.length || 0;
    return result;
  };

  useEffect(() => {
    const newMonthBooks = [];
    newMonthBooks[0] = countBooks(books, 'jan');
    newMonthBooks[1] = countBooks(books, 'fev');
    newMonthBooks[2] = countBooks(books, 'mar');
    newMonthBooks[3] = countBooks(books, 'apr');
    newMonthBooks[4] = countBooks(books, 'mai');
    newMonthBooks[5] = countBooks(books, 'jun');
    newMonthBooks[6] = countBooks(books, 'jul');
    newMonthBooks[7] = countBooks(books, 'aug');
    newMonthBooks[8] = countBooks(books, 'set');
    newMonthBooks[9] = countBooks(books, 'oct');
    newMonthBooks[10] = countBooks(books, 'nov');
    newMonthBooks[11] = countBooks(books, 'dec');
    setAvg(calculateAvg(newMonthBooks));
    setMonthBooks(newMonthBooks);
  }, []);

  const display = (quantity, mes) => (
    <span>
      {mes}: {quantity} {quantity > 1 ? <>books</> : <>book</>}
    </span>
  );

  return (
    <>
      <Average>
        Monthly Average: {avg} {avg > 1 ? <>books</> : <>book</>}
      </Average>
      {monthBooks[0] ? (
        <Monthly>{display(monthBooks[0], 'January')}</Monthly>
      ) : null}
      {monthBooks[1] ? (
        <Monthly>{display(monthBooks[1], 'February')}</Monthly>
      ) : null}
      {monthBooks[2] ? (
        <Monthly>{display(monthBooks[2], 'March')}</Monthly>
      ) : null}
      {monthBooks[3] ? (
        <Monthly>{display(monthBooks[3], 'April')}</Monthly>
      ) : null}
      {monthBooks[4] ? (
        <Monthly>{display(monthBooks[4], 'May')}</Monthly>
      ) : null}
      {monthBooks[5] ? (
        <Monthly>{display(monthBooks[5], 'June')}</Monthly>
      ) : null}
      {monthBooks[6] ? (
        <Monthly>{display(monthBooks[6], 'July')}</Monthly>
      ) : null}
      {monthBooks[7] ? (
        <Monthly>{display(monthBooks[7], 'August')}</Monthly>
      ) : null}
      {monthBooks[8] ? (
        <Monthly>{display(monthBooks[8], 'September')}</Monthly>
      ) : null}
      {monthBooks[9] ? (
        <Monthly>{display(monthBooks[9], 'October')}</Monthly>
      ) : null}
      {monthBooks[10] ? (
        <Monthly>{display(monthBooks[10], 'November')}</Monthly>
      ) : null}
      {monthBooks[11] ? (
        <Monthly>{display(monthBooks[11], 'December')}</Monthly>
      ) : null}
    </>
  );
}

MonthStats.propTypes = {
  books: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default MonthStats;
