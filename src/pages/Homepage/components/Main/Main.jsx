import React from 'react';
import { MainWrapper, SearchButton, SearchButtonWrapper } from './main.styled-components';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';


function Main() {
  return (
    <MainWrapper>
      <Logo />
      <SearchBar />

      <SearchButtonWrapper>
        <SearchButton>Google Search</SearchButton>
        &nbsp;
        <SearchButton>I&apos;m Feeling Lucky</SearchButton>
      </SearchButtonWrapper>
    </MainWrapper>
  );
}

export default Main;
