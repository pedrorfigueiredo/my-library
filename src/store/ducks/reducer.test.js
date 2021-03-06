import reducer, { Types } from './reducer';

describe('Reducer', () => {
  it('handles actions of unknown type', () => {
    const action = {
      type: 'RANDOM_WORD',
    };

    const newState = reducer({}, action);
    expect(newState).toEqual({});
  });

  it('handles actions of ADD_BOOK type', () => {
    const book = { id: 1234, title: 'test' };
    const action = {
      type: Types.ADD_BOOK,
      payload: book,
    };

    const newState = reducer({ books: [] }, action);
    expect(newState.books).toEqual([book]);
  });

  it('handles actions of REMOVE_BOOK type', () => {
    const book = { id: 1234, title: 'test' };
    const action = {
      type: Types.REMOVE_BOOK,
      payload: 1234,
    };

    const newState = reducer({ books: [book] }, action);
    expect(newState.books).toEqual([]);
  });

  it('handles actions of READ_BOOK type', () => {
    const book = { id: 1234, title: 'test', isRead: false };
    const action = {
      type: Types.READ_BOOK,
      payload: { id: 1234, date: new Date() },
    };

    const newState = reducer({ books: [book] }, action);
    expect(newState.books[0].isRead).toEqual(true);
  });

  it('handles actions of FETCH_BOOKS type', () => {
    const books = [
      { id: 1234, title: 'test', isRead: false },
      { id: 5678, title: 'test2', isRead: false },
    ];
    const action = {
      type: Types.FETCH_BOOKS,
      payload: books,
    };

    const newState = reducer({}, action);
    expect(newState.books).toEqual(books);
  });
});
