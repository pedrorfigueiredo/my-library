// Actions Types
export const Types = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
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

export default reducer;
