import React from 'react';
import styled from 'styled-components';
import Homepage from './pages/Homepage';

const AppWrapper = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Homepage />
    </AppWrapper>
  );
}

export default App;
