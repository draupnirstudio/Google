import sprite from '@img/sprite.png';
import styled from "styled-components";

export default styled.div`
  height: 30px;
  width: 30px;
  background: url(${sprite}) -132px -38px;
  opacity: .55;
  cursor: pointer;
  
  &:hover {
    opacity: .85;
  }
`;
