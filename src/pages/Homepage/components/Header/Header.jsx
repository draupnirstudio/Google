import React from 'react';
import PropTypes from 'prop-types';

import { HOMEPAGE_HEADER_LINKS } from '@constant/homepage_links';
import { HeaderLink, HeaderWrapper } from './header.styled-components';
import AppsIcon from './components/AppsIcon';
import SignInButton from './components/SignInButton';


const generateHeaderList = (listItemArray) => Object.keys(listItemArray).map((key) => {
  const element = listItemArray[key];
  const { name, link } = element;

  return (
    <div key={name}>
      <HeaderLink href={link}>
        {name}
      </HeaderLink>
    </div>
  );
});


function Header(props) {
  const { onAppsIconClick } = props;
  const headerList = generateHeaderList(HOMEPAGE_HEADER_LINKS);

  return (
    <HeaderWrapper>
      {headerList}
      <AppsIcon onClick={onAppsIconClick} />
      <SignInButton />
    </HeaderWrapper>
  );
}

Header.propTypes = {
  onAppsIconClick: PropTypes.func.isRequired,
};

export default Header;
