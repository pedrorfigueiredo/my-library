import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
  padding: 10px;
  position: relative;
  border: 1px solid
    ${(props) =>
      props.isRead ? props.theme.color.primary : props.theme.color.divider};
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

export const DeleteButton = styled(AiOutlineClose)`
  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.text};
  height: 25px;
  width: 25px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  cursor: pointer;
`;

export const ReadState = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  background: ${(props) =>
    props.isRead ? props.theme.color.primary : props.theme.color.divider};
  color: ${(props) => props.theme.color.text};
  padding: 3px 7px;
  ${(props) => !props.isRead && 'cursor: pointer'}
`;
