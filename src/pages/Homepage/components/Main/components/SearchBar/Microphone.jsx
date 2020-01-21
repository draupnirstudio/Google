import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MicrophonePng from '@img/microphone.png';
import GNEvents from '@constant/events';
import GNEmitter from '@lib/GNEmitter/';


const MicrophoneWrapper = styled.div`
  margin: 0 2px 0 8px;
  cursor: pointer;
`;

const MicrophoneImg = styled.img`
  width: 24px;
  height: 24px;
  
`;

const microphoneIconMouseOverHandler = () => {
  GNEmitter.emit(GNEvents.MICROPHONE_ICON_MOUSE_OVER, true);
};

const microphoneIconMouseOutHandler = () => {
  GNEmitter.emit(GNEvents.MICROPHONE_ICON_MOUSE_OVER, false);
};

const Microphone = () => {
  const microphone = useRef();

  useEffect(() => {
    GNEmitter.emit(GNEvents.MICROPHONE_ICON_DID_MOUNT, microphone.current);
  }, []);

  return (
    <MicrophoneWrapper
      ref={microphone}
      onMouseOver={microphoneIconMouseOverHandler}
      onMouseOut={microphoneIconMouseOutHandler}
    >
      <MicrophoneImg src={MicrophonePng} />
    </MicrophoneWrapper>
  );
};

export default Microphone;
