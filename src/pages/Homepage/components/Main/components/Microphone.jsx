import React from 'react';
import styled from 'styled-components';
import MicrophonePng from '@img/microphone.png';

const MicrophoneImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 2px 0 8px;
  cursor: pointer;
`;

const Microphone = () => <MicrophoneImg src={MicrophonePng} />;

export default Microphone;
