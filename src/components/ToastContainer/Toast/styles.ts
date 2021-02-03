import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasdescription: number;
}

const ToastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px; /** 300px; */
  position: relative; /** Porque a gente vai ter um position absolute dentro dele ????????????? */
  padding: 16px 30px 16px 16px; /** Padding maior na direita por causa do botão de fechar maior */
  border-radius: 10px; /** 4px; */
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); /** 8px de blur */

  display: flex; /** Para alinhar todos os itens */

  ${props => ToastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 1px 10px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    background: transparent;
    opacity: 0.8;
    border: 0;
    color: inherit;
  }

  /* position: absolute;
  right: 20px;
  top: 20px;

  button {
    position: relative;
    background: transparent;
  } */

  ${props =>
    !props.hasdescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
