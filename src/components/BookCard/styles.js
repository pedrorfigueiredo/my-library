import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.color.divider};
  :hover {
    border: 1px solid ${(props) => props.theme.color.secondary};
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const Author = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const Year = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
`;
