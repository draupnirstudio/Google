import React, { useContext } from 'react';
import styled from 'styled-components';
import MainContext from '@ctx/main.context';
import PropTypes from 'prop-types';

const SearchButtonWrapper = styled.div`
  text-align: center;
  padding: 11px 0;
  width: ${(props) => (
    props.shouldShowSearchResult ? '584px' : '571px'
  )};
  position: relative;
  margin-top: ${(props) => (
    props.shouldShowSearchResult ? '0px' : '19px'
  )};
  margin-bottom: ${(props) => (props.shouldShowSearchResult ? '12px' : '0')};
`;

const SearchButton = styled.div`
  display: inline-block;
  background-color: #f2f2f2;
  background-image: linear-gradient(top, #f5f5f5, #f1f1f1);
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  color: #5F6368;
  font-size: 14px;
  margin: 0 4px;
  padding: 0 16px;
  line-height: 34px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(top, #f8f8f8, #f1f1f1);
    background-color: #f8f8f8;
    border: 1px solid #c6c6c6;
    color: #222;
  }
`;

const luckyButtonClickHandler = () => {
  window.location.href = 'https://www.google.com/doodles/';
};

const SearchButtons = (props) => {
  const { onSearchButtonClick } = props;
  const {
    shouldShowSearchResult,
  } = useContext(MainContext);

  return (
    <SearchButtonWrapper
      shouldShowSearchResult={shouldShowSearchResult}
    >
      <SearchButton onClick={onSearchButtonClick}>Google Search</SearchButton>
        &nbsp;
      <SearchButton onClick={luckyButtonClickHandler}>I&apos;m Feeling Lucky</SearchButton>
    </SearchButtonWrapper>
  );
};

SearchButtons.propTypes = {
  onSearchButtonClick: PropTypes.func.isRequired,
};


export default SearchButtons;
