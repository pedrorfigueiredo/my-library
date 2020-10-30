// Actions Types
export const Types = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  READ_BOOK: 'READ_BOOK',
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
      const index = state.books.findIndex((book) => book.id === action.payload);
      const newBook = state.books[index];
      newBook.isRead = true;
      return {
        ...state,
        books: [
          ...state.books.slice(0, index),
          newBook,
          ...state.books.slice(index + 1, state.books.length),
        ],
      };
    }

    default:
      return state;
  }
};

// Action creators
export const addBook = (book) => {
  return {
    type: Types.ADD_BOOK,
    payload: book,
  };
};

export const removeBook = (id) => {
  return {
    type: Types.REMOVE_BOOK,
    payload: id,
  };
};

export const readBook = (id) => {
  return {
    type: Types.READ_BOOK,
    payload: id,
  };
};

export default reducer;
