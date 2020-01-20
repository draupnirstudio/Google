import React from 'react';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  width: 584px;
  border-radius: 24px;
  height: 46px;
  margin-top: 27px;
  padding: 0 14px;
  
  &:hover {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }
`;


const SearchBar = () => (
  <SearchBarWrapper>
    <SearchIcon />
  </SearchBarWrapper>
);

export default SearchBar;
