import months from '../../utils/months';

// Actions Types
export const Types = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  READ_BOOK: 'READ_BOOK',
  FETCH_BOOKS: 'FETCH_BOOKS',
};

// Reducer
const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case Types.REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case Types.READ_BOOK: {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      const newBook = state.books[index];
      newBook.isRead = true;
      newBook.monthRead = months[action.payload.date.getMonth()];
      newBook.yearRead = action.payload.date.getFullYear();
      return {
        ...state,
        books: [
          ...state.books.slice(0, index),
          newBook,
          ...state.books.slice(index + 1, state.books.length),
        ],
      };
    }

    case Types.FETCH_BOOKS: {
      const books = action.payload || [];
      return { ...state, books };
    }

    default:
      return state;
  }
};

// Action creators
export const addBook = (book) => (dispatch) => {
  const books = JSON.parse(localStorage.getItem('books'));
  let newBooks;
  if (!books) {
    newBooks = [book];
  } else {
    newBooks = [...books, book];
  }
  localStorage.setItem('books', JSON.stringify(newBooks));

  dispatch({
    type: Types.ADD_BOOK,
    payload: book,
  });
};

export const removeBook = (id) => (dispatch) => {
  const books = JSON.parse(localStorage.getItem('books'));
  const newBooks = [...books.filter((book) => book.id !== id)];
  localStorage.setItem('books', JSON.stringify(newBooks));

  dispatch({
    type: Types.REMOVE_BOOK,
    payload: id,
  });
};

export const readBook = (id, date) => (dispatch) => {
  const books = JSON.parse(localStorage.getItem('books'));
  const index = books.findIndex((book) => book.id === id);
  const newBook = books[index];
  newBook.isRead = true;
  newBook.monthRead = months[date.getMonth()];
  newBook.yearRead = date.getFullYear();
  const newBooks = [
    ...books.slice(0, index),
    newBook,
    ...books.slice(index + 1, books.length),
  ];

  localStorage.setItem('books', JSON.stringify(newBooks));
  dispatch({
    type: Types.READ_BOOK,
    payload: { id, date },
  });
};

export const fetchBooks = () => (dispatch) => {
  const books = JSON.parse(localStorage.getItem('books'));
  dispatch({
    type: Types.FETCH_BOOKS,
    payload: books,
  });
};

export default reducer;
