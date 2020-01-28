import React from 'react';

const MainContext = React.createContext({
  isSearchBarFocused: false,
  setSearchBarFocused: () => {},
  shouldShowSearchResult: false,
  setShouldShowSearchResult: () => {},
  searchBarText: '',
  setSearchBarText: () => {},
});
export default MainContext;
