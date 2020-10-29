import styled from 'styled-components';
import { MdDone } from 'react-icons/md';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border: 1px solid
    ${(props) =>
      props.isAdd ? props.theme.color.secondary : props.theme.color.divider};
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

export const OkMark = styled(MdDone)`
  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.text};
  height: 25px;
  width: 25px;
  position: absolute;
  top: 0;
  right: 0;
`;
