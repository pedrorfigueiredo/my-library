import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/ducks/reducer';
import './index.css';
import App from './App';
import Theme from './hoc/Theme';

const store = createStore(reducer);

const app = (
  <React.StrictMode>
    <Theme>
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
