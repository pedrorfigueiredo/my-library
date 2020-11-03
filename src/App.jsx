import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBooks } from './store/ducks/reducer';
import { Layout } from './styles';
import NavBar from './components/NavBar';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import Report from './pages/Report';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, fetchBooks]);

  return (
    <Router>
      <Layout>
        <NavBar />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/adicionar" component={AddBook} />
          <Route path="/relatorio" component={Report} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
