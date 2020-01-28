import React, {
  useContext,
  useEffect, useRef,
} from 'react';
import styled from 'styled-components';

import MainContext from '@ctx/main.context';
import PropTypes from 'prop-types';
import SearchIcon from './SearchIcon';
import Microphone from './Microphone';

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
  margin-bottom: ${(props) => (props.shouldShowSearchResult ? '-1px' : '0')};
  padding: 0 14px;
  user-select: none;
  
  &:hover, &.focus {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  } 
  
  &.focus.search-result {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const SearchBarInput = styled.input`
    background-color: transparent;
    border: none;
    margin: 0 0 0 13px;
    padding: 0;
    color: rgba(0,0,0,.87);
    word-wrap: break-word;
    outline: none;
    display: flex;
    flex: 100%;
    -webkit-tap-highlight-color: transparent;
    height: 34px;
    font-size: 16px;
    line-height: 34px;
`;


const SearchBar = (props) => {
  const wrapper = useRef();
  const input = useRef();

  const { mounted } = props;

  const {
    isSearchBarFocused,
    shouldShowSearchResult,
    searchBarText, setSearchBarText,
  } = useContext(MainContext);

  useEffect(() => {
    input.current.focus();
    mounted(wrapper.current, input.current);
  }, []);

  const handleInputKeyPress = (e) => {
    const { searchEventHandler } = props;
    if (e.key === 'Enter') {
      searchEventHandler && searchEventHandler();
    }
  };

  return (
    <SearchBarWrapper
      ref={wrapper}
      shouldShowSearchResult={shouldShowSearchResult}
      className={
      (isSearchBarFocused ? 'focus ' : '')
        + (shouldShowSearchResult ? 'search-result' : '')
      }
    >
      <SearchIcon />
      <SearchBarInput
        type="text"
        ref={input}
        value={searchBarText}
        onKeyPress={handleInputKeyPress}
        onChange={setSearchBarText}
      />
      <Microphone />
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  searchEventHandler: PropTypes.func.isRequired,
  mounted: PropTypes.func.isRequired,
};

export default SearchBar;
