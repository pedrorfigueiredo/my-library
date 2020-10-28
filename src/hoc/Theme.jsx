import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: '#3F51B5',
    darkPrimary: '#303F9F',
    lightPrimary: '#C5CAE9',
    secondary: '#ff4081',
    primaryText: '#212121',
    secondarText: '#757575',
    text: '#fff',
    divider: '#bdbdbd',
  },
  fontSize: {
    small: '0.8em',
    medium: '1.0em',
    large: '1.2em',
    huge: '1.4em',
    gigantic: '1.6em',
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
