import styled from 'styled-components';

export const Average = styled.span`
  border: 1px solid ${(props) => props.theme.color.darkPrimary};
  padding: 5px;
  background: ${(props) => props.theme.color.primary};
  margin-top: 20px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.gigantic};
`;

export const Monthly = styled.span`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize.large};
`;
