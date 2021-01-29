import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isWrong: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  color: #666360;
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 16px;
  align-items: center;

  ${props =>
    props.isWrong &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    border: 0;
    color: #f4ede8;
    background: transparent;
    &::placeholder {
      color: #666360;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: #f4ede8 !important;
    -webkit-box-shadow: 0 0 0 30px #232129 inset !important;
  }

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
