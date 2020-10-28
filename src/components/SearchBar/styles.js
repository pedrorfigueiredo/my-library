import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  align-self: center;
  width: 400px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid ${(props) => props.theme.color.divider};
  padding: 5px;
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const Button = styled.button`
  padding: 8px 10px 3px 10px;
  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.huge};
  cursor: pointer;
`;
