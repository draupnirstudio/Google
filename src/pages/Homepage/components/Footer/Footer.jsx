import React from 'react';
import PropTypes from 'prop-types';

import {
  HOMEPAGE_FOOTER_LEFT_LIST_LINKS,
  HOMEPAGE_FOOTER_RIGHT_LIST_LINKS,
  HOMEPAGE_LINKS,
} from '@constant/homepage_links';
import {
  FooterListItem, FooterListItemLink, FooterListLeftWrapper, FooterListRightWrapper, FooterWrapper,
} from './footer.styled-components';

const settingsLinkClickHandler = (handler, e) => {
  e.preventDefault();
  typeof handler === 'function' && handler();
};

const generateFooterList = (listItemArray, handler) => Object.keys(listItemArray).map((key) => {
  const element = listItemArray[key];
  const { name, link } = element;

  const listItemLinkProps = {};
  if (name === HOMEPAGE_LINKS.SETTINGS.name) {
    listItemLinkProps.onClick = settingsLinkClickHandler.bind(null, handler);
  }

  return (
    <FooterListItem key={name}>
      <FooterListItemLink href={link} {...listItemLinkProps}>
        {name}
      </FooterListItemLink>
    </FooterListItem>
  );
});

function Footer(props) {
  const { onSettingsLinkClick } = props;

  const leftList = generateFooterList(HOMEPAGE_FOOTER_LEFT_LIST_LINKS);
  const rightList = generateFooterList(HOMEPAGE_FOOTER_RIGHT_LIST_LINKS, onSettingsLinkClick);

  return (
    <FooterWrapper>
      <FooterListLeftWrapper>
        {leftList}
      </FooterListLeftWrapper>
      <FooterListRightWrapper>
        {rightList}
      </FooterListRightWrapper>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  onSettingsLinkClick: PropTypes.func.isRequired,
};

export default Footer;
