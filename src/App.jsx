import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
