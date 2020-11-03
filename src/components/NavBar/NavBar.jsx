import React from 'react';
import { Wrapper, NavItem } from './styles';

function NavBar() {
  return (
    <Wrapper>
      <NavItem to="/" exact>
        My Books
      </NavItem>
      <NavItem to="/add">Add Book</NavItem>
      <NavItem to="/report">Reports</NavItem>
    </Wrapper>
  );
}

export default NavBar;
