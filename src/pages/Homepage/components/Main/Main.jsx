import React from 'react';

import MainContext from '@ctx/main.context';
import GNHistoryList from '@lib/GNHistoryList';
import * as _ from 'lodash';
import { hashCode, isInside } from '@util/helpers';
import GNTrie from '@lib/GNTrie';
import { CITY_LIST } from '@constant/city_list';
import { HOMEPAGE_HISTORY_LIST_STORAGE_KEY, SEARCH_HISTORY_LENGTH, SEARCH_RESULT_LENGTH } from '@constant/misc';
import { MainContentWrapper, MainWrapper } from './main.styled-components';
import Logo from './components/Logo/Logo';
import SearchBar from './components/SearchBar';
import SearchButtons from './components/SearchButtons';
import SearchResult from './components/SearchResult';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearchBarFocused: false,
      shouldShowSearchResult: false,
      searchBarText: '',
      setSearchBarText: this.setSearchBarText,
      setSearchBarFocused: this.setSearchBarFocused,
      setShouldShowSearchResult: this.setShouldShowSearchResult,
      searchResult: [],
    };

    document.addEventListener('click', (e) => {
      const { shouldShowSearchResult } = this.state;
      const { clientX: x, clientY: y } = e;
      if (_.isNil(this.innerSearchInputComponentRect)) {
        return;
      }
      if (isInside(x, y, this.innerSearchInputComponentRect)) {
        this.setState({
          isSearchBarFocused: true,
        });
        this.setShouldShowSearchResult(true);
        return;
      }

      if (
        !_.isNil(this.searchComponentRect)
        && shouldShowSearchResult
        && isInside(x, y, this.searchComponentRect)
      ) {
        return;
      }
      this.setState({
        isSearchBarFocused: false,
        shouldShowSearchResult: false,
      });
    });
  }

  async componentDidMount() {
    await this.initDic();

    this.setState({
      searchResult: await this.getSearchResult(),
    });
  }

  initDic = async () => {
    this.searchHistoryList = await GNHistoryList.createList(
      HOMEPAGE_HISTORY_LIST_STORAGE_KEY,
      SEARCH_RESULT_LENGTH,
    );
    [this.searchResultTrie, this.searchHistoryTrie] = await Promise.all([GNTrie.createTrie([
      ...Object.keys(CITY_LIST).reduce((c, key) => {
        CITY_LIST[key].forEach((city, i) => {
          c.push([city.name, {
            key: hashCode(city.name + key + i),
            value: city.name,
            isHistory: false,
          }], [city.py, {
            key: hashCode(city.py + key + i),
            value: city.name,
            isHistory: false,
          }]);
        });
        return c;
      }, []),
    ]), GNTrie.createTrie([
      ...this.searchHistoryList.getList().reduce((c, e) => {
        c.push([e.value, { ...e, isHistory: true }]);
        return c;
      }, []),
    ])]);
  };

  handleSearchResultComponentMounted = (searchResultComponent) => {
    this.searchResultComponentRect = searchResultComponent.getBoundingClientRect();
    this.calculateSearchBarRect();
  };

  handleSearchBarComponentMounted = (searchBarComponent, innerSearchInputComponent) => {
    this.innerSearchBar = innerSearchInputComponent;
    this.searchBarComponentRect = searchBarComponent.getBoundingClientRect();
    this.innerSearchInputComponentRect = innerSearchInputComponent.getBoundingClientRect();
  };

  calculateSearchBarRect = () => {
    if (_.isNil(this.searchBarComponentRect) || _.isNil(this.searchResultComponentRect)) return;
    const {
      bottom: searchResultBottom,
      left: searchResultLeft,
      right: searchResultRight,
    } = this.searchResultComponentRect;
    const {
      top: searchBarTop,
    } = this.searchBarComponentRect;

    this.searchComponentRect = {
      top: searchBarTop,
      bottom: searchResultBottom,
      left: searchResultLeft,
      right: searchResultRight,
    };
  };

  setSearchBarFocused = (v) => {
    this.setState({
      isSearchBarFocused: v,
    });
  };

  setShouldShowSearchResult = (v) => {
    const { searchResult } = this.state;
    this.setState({
      shouldShowSearchResult: searchResult.length !== 0 && v,
    });
  };

  setSearchBarText = async (e) => {
    const keyword = e.target.value;
    this.setState({
      searchBarText: keyword,

    }, async () => {
      this.setState({
        searchResult: await this.getSearchResult(),
      });
      this.setShouldShowSearchResult(true);
    });
  };

  handleSearchResultClick = (e) => {
    this.setState({
      searchBarText: e.value,
      shouldShowSearchResult: false,
    }, () => {
      this.goSearch();
    });
  };

  handleRemoveSearchHistoryClick = async (item, event) => {
    event.stopPropagation();
    const { searchHistoryList } = this;
    await searchHistoryList.remove({ key: item.key, value: item.value }, true);
    this.searchHistoryTrie.remove(item.value, { ...item, isHistory: true });
    this.setState({
      searchResult: await this.getSearchResult(),
    }, () => {
      this.innerSearchBar.focus();
    });
  };

  getSearchResult = async () => {
    let { searchBarText } = this.state;
    searchBarText = _.trim(searchBarText);
    let res = [];
    if (searchBarText.length === 0) {
      res = this.searchHistoryList.getList().map((e) => ({ ...e, isHistory: true }));
    } else {
      res = [
        ...this.searchHistoryTrie.search(searchBarText)
          .slice(0, SEARCH_HISTORY_LENGTH),
        ...this.searchResultTrie.search(searchBarText)
          .slice(0, SEARCH_RESULT_LENGTH - SEARCH_HISTORY_LENGTH),
      ];
    }

    if (res.length === 0) {
      this.setState({
        shouldShowSearchResult: false,
      });
    }

    return res;
  };

  goSearch = async () => {
    let { searchBarText } = this.state;
    searchBarText = _.trim(searchBarText);
    if (searchBarText.length === 0) return;

    const { searchHistoryList } = this;
    await searchHistoryList.refer({
      key: hashCode(searchBarText),
      value: searchBarText,
    }, true);

    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchBarText)}`;
  };


  render() {
    const { shouldShowSearchResult, searchResult } = this.state;

    return (
      <MainContext.Provider value={this.state}>
        <MainContentWrapper>
          <MainWrapper>
            <Logo />
            <SearchBar
              mounted={this.handleSearchBarComponentMounted}
              searchEventHandler={this.goSearch}
            />

            {shouldShowSearchResult
              ? (
                <SearchResult
                  mounted={this.handleSearchResultComponentMounted}
                  searchResult={searchResult}
                  onRemoveClick={this.handleRemoveSearchHistoryClick}
                  onSearchResultClick={this.handleSearchResultClick}
                >
                  <SearchButtons onSearchButtonClick={this.goSearch} />
                </SearchResult>
              )
              : <SearchButtons onSearchButtonClick={this.goSearch} />}
          </MainWrapper>
        </MainContentWrapper>
      </MainContext.Provider>
    );
  }
}

export default Main;
