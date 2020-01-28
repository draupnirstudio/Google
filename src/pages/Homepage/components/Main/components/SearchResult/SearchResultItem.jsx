import React from 'react';
import TimeIcon from '@img/time.png';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchResultItemWrapper = styled.div`
  height: 30px;
  width: 100%;
  padding: 0 20px 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => (props.isHistory ? ' #52188c' : '#333333')};
  font-size: 16px;
  user-select: none;
  
  &:hover {
    background: #eee;
  }
`;

const Time = styled.div`
    background: url(${TimeIcon}) no-repeat 0 -21px;
    background-size: 20px;
    min-height: 20px;
    min-width: 20px;
    height: 20px;
    width: 20px;
    margin-right: 14px;
}`;

const Magni = styled.div`
    background: url(${TimeIcon}) no-repeat 0 0;
    background-size: 20px;
    min-height: 20px;
    min-width: 20px;
    height: 20px;
    width: 20px;
    margin-right: 14px;
`;

const SearchText = styled.div`
  text-align: left;
  cursor: default;
  flex: 1;
  margin-right: 8px;
`;

const RemoveLink = styled.div`
    color: #80868b;
    cursor: pointer;
    font-size: 13px;
    align-self: center;
    padding-right: 0;
    text-decoration: underline;
`;

function SearchResultItem(props) {
  const {
    children, onRemoveClick, onItemClick, isHistory,
  } = props;
  return (
    <SearchResultItemWrapper onClick={onItemClick} isHistory={isHistory}>
      { isHistory ? <Time /> : <Magni /> }
      <SearchText>{children}</SearchText>
      <RemoveLink onClick={onRemoveClick}>Remove</RemoveLink>
    </SearchResultItemWrapper>
  );
}

SearchResultItem.propTypes = {
  children: PropTypes.node.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  isHistory: PropTypes.bool.isRequired,
};

export default SearchResultItem;
