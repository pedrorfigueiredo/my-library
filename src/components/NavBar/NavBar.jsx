import React from 'react';
import { Wrapper, NavItem } from './styles';

function NavBar() {
  return (
    <Wrapper>
      <NavItem to="/" exact>
        Meus Livros
      </NavItem>
      <NavItem to="/adicionar">Adicionar à Coleção</NavItem>
      <NavItem to="/relatorio">Relatório</NavItem>
    </Wrapper>
  );
}

export default NavBar;
