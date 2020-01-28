import React from 'react';
import PropTypes from 'prop-types';

import { HOMEPAGE_HEADER_LINKS } from '@constant/homepage_links';
import styled from 'styled-components';
import AppsIcon from './components/AppsIcon';
import SignInButton from './components/SignInButton';

const HeaderWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   margin-top: 16px;
   height: 30px;
   padding: 0 30px;
   font-size: 13px;
   color: rgba(0, 0, 0, 0.87);
   
   div {
    margin-right: 15px;
   }
   
   div:last-child {
    margin-right: 0;
   }
`;

const HeaderLink = styled.a`
  display: inline-block;
  height: 24px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;


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
