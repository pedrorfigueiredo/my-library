import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5%;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.gigantic};
`;

export const Error = styled.span`
  color: red;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 20px;
  margin-top: 10px;
  width: 400px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;
