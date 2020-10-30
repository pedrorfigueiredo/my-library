import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5%;
    align-items: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 20px;
  margin-top: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;
