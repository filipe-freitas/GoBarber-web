import styled from 'styled-components';

export const Container = styled.div`
  position: relative; /** Todo position absolute dentro do container será relativo à ele, e não à página */

  span {
    position: absolute;
    width: 160px;
    color: #312e38;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    bottom: calc(
      100% + 12px
    ); /** Vai ficar alinhado certinho com o topo do ícone + 12px de espaço*/

    /** Hackzinho para centraliar o tooltip no ícone */
    left: 50%;
    transform: translateX(-50%);

    /** Setinha pra baixo */
    &::before {
      position: absolute;
      border-style: solid;
      border-color: #ff9000 transparent; /** Cor da flechinha */
      border-width: 6px 6px 0 6px;
      top: 100%;
      content: ''; /** Vazio mesmo, sem ele não mostra */

      /** Centralizando a flechinha */
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
