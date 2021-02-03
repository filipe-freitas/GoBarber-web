import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBrackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  /** Força os itens dentro do Container a ocuparem toda a tela */
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearsFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  },
`;

export const AnimatedContent = styled.div`
  display: flex;
  flex-direction: column;

  /** Pega todo o conteúdo e centraliza */
  place-content: center;

  align-items: center;

  animation: ${appearsFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    svg {
      margin-right: 16px;
    }

    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    color: #f4ede8;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBrackgroundImg}) no-repeat center;
  background-size: cover;
`;
