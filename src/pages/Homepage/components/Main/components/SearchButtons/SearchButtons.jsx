import React from 'react';
import styled from 'styled-components';

export const SearchButtonWrapper = styled.div`
  text-align: center;
  padding: 11px 0;
  margin-top: 18px;
  width: 571px;
`;

export const SearchButton = styled.div`
  display: inline-block;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  color: #5F6368;
  font-size: 14px;
  margin: 0 4px;
  padding: 0 16px;
  line-height: 36px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  background-image: linear-gradient(top, #f5f5f5, #f1f1f1);
  
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(top, #f8f8f8, #f1f1f1);
    background-color: #f8f8f8;
    border: 1px solid #c6c6c6;
    color: #222;
  }
`;

const SearchButtons = () => (
  <SearchButtonWrapper>
    <SearchButton>Google Search</SearchButton>
  &nbsp;
    <SearchButton>I&apos;m Feeling Lucky</SearchButton>
  </SearchButtonWrapper>
);

export default SearchButtons;
