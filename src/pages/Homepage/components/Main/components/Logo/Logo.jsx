import React from 'react';
import styled from 'styled-components';
import LogoPng from '@img/logo.png';

const LogoImg = styled.img`
  width: 272px;
  height: 92px;
  margin: 0 auto;
`;

const Logo = () => <LogoImg src={LogoPng} />;

export default Logo;
