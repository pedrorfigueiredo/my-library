import React from 'react';
import { Wrapper, NavItem } from './styles';

function Navbar() {
  return (
    <Wrapper>
      <NavItem to="/">Meus Livros</NavItem>
      <NavItem to="/adicionar">Adicionar Novo</NavItem>
      <NavItem to="/relatorio">Relatório</NavItem>
    </Wrapper>
  );
}

export default Navbar;
