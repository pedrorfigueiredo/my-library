import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5%;
    align-items: center;
  }
`;

export const YearGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const YearLabel = styled.label`
  font-size: ${(props) => props.theme.fontSize.large};
  margin-right: 10px;
`;

export const YearSelect = styled.select`
  border: 1px solid ${(props) => props.theme.color.divider};
  padding: 0 20px;
  font-size: ${(props) => props.theme.fontSize.huge};
`;

export const Message = styled.span`
  color: red;
`;
