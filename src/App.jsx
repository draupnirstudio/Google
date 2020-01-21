import React from 'react';
import styled from 'styled-components';

import Homepage from './pages/Homepage/Homepage';

const AppWrapper = styled.div`
  height: 100vh;
  min-height: 768px;
  overflow: hidden;
`;

function App() {
  return (
    <AppWrapper>
      <Homepage />
    </AppWrapper>
  );
}

export default App;
