import React from "react";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const HomepageWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  font-size: 13px;
`;

const footerSettingsLinkClickHandler = () => {
  console.log(1);
};

const headerAppsIconClickHandler = () => {
  console.log(2);
};


function Homepage() {
  return (
    <HomepageWrapper>
      <Header onAppsIconClick={headerAppsIconClickHandler}/>
      <Main/>
      <Footer onSettingsLinkClick={footerSettingsLinkClickHandler}/>
    </HomepageWrapper>
  );
}

export default Homepage;

