import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Theme from './hoc/Theme';

const app = (
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
