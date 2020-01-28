import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchResultItem from './SearchResultItem';

const SearchResultWrapper = styled.div`
  position: relative;
  background: #fff;
  list-style-type: none;
  border: 0;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 4px 6px 0 rgba(32,33,36,0.28);
  padding-bottom: 4px;
  overflow: hidden;
`;

const SearchResultList = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: column;
  margin-bottom: 8px;
`;

const Divider = styled.div`
  border-top: 1px solid #e8eaed;
  margin: 0 20px 0 14px;
  padding-bottom: 4px;
`;

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.searchResultRef = React.createRef();
  }

  componentDidMount() {
    const { mounted } = this.props;
    mounted(this.searchResultRef.current);
  }

  render() {
    const {
      children, searchResult, onSearchResultClick, onRemoveClick,
    } = this.props;

    const searchItems = searchResult.map((e) => (
      <SearchResultItem
        isHistory={e.isHistory}
        key={e.key}
        onItemClick={onSearchResultClick.bind(null, e)}
        onRemoveClick={onRemoveClick.bind(null, e)}
      >
        {e.value}
      </SearchResultItem>
    ));

    return (
      <SearchResultWrapper ref={this.searchResultRef}>
        <Divider />
        <SearchResultList>
          {searchItems}
        </SearchResultList>
        {children}
      </SearchResultWrapper>
    );
  }
}

SearchResult.propTypes = {
  searchResult: PropTypes.arrayOf(Object).isRequired,
  onSearchResultClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  mounted: PropTypes.func.isRequired,
};

export default SearchResult;
