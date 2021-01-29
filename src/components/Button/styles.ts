import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  height: 56px;
  padding: 0 16px;
  width: 100%;
  border: 0;
  border-radius: 10px;
  background: #ff9000;
  color: #312e38;
  transition: background 0.2s;
  font-weight: 500;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
