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
