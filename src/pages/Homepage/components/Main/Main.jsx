import React from 'react';

import { MainWrapper } from './main.styled-components';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import SearchButtons from './components/SearchButtons';

class Main extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <MainWrapper>
        <Logo />
        <SearchBar />

        <SearchButtons />
      </MainWrapper>
    );
  }
}

export default Main;
