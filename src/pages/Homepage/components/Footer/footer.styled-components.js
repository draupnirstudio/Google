import styled from "styled-components";

const footerLinkColor = "#5f6368";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  color: ${footerLinkColor};
  background: #f3f3f3;
  font-size: 13px;
`;

export const FooterListLeftWrapper = styled.ul`
  height: 100%;
  margin-left: 3px !important;
`;

export const FooterListRightWrapper = styled(FooterListLeftWrapper)`
  margin-right: 30px !important;
`;

export const FooterListItem = styled.li`
  display: inline-block;
  line-height: 40px;
  padding-left: 27px;
`;

export const FooterListItemLink = styled.a`
  color: ${footerLinkColor};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
