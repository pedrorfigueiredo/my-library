import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout } from './styles';
import NavBar from './components/NavBar';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';

function App() {
  return (
    <Router>
      <Layout>
        <NavBar />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/adicionar" component={AddBook} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
