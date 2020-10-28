import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.color.primary};
`;

export const NavItem = styled(NavLink)`
  padding: 15px 20px;
  color: ${(props) => props.theme.color.text};
  :hover {
    background: ${(props) => props.theme.color.darkPrimary};
  }
`;
