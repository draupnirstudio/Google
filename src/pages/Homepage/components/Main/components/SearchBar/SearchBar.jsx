import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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
  padding: 0 14px;
  user-select: none;
  
  &:hover, &.focus {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
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


const SearchBar = () => {
  const wrapper = useRef();
  const input = useRef();

  const [hasInputFocused, setHasInputFocused] = useState(true);

  useEffect(() => {
    wrapper.current.focus();
    input.current.focus();
    // eslint-disable-next-line
  }, []);

  const handleInputFocus = () => {
    setHasInputFocused(true);
  };

  const handleInputBlur = () => {
    setHasInputFocused(false);
  };

  return (
    <SearchBarWrapper ref={wrapper} className={hasInputFocused ? 'focus' : ''}>
      <SearchIcon />
      <SearchBarInput type="text" ref={input} onFocus={handleInputFocus} onBlur={handleInputBlur} />
      <Microphone />
    </SearchBarWrapper>
  );
};

export default SearchBar;
