import React from 'react';
import styled from 'styled-components';

import GNEvents from '@constant/events';
import GNEmitter from '@lib/GNEmitter/';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import SearchByVoiceTip from './components/SearchByVoiceTip';

const HomepageWrapper = styled.div`
  height: 100%;
  font-size: 13px;
`;

const HomepageContentWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const footerSettingsLinkClickHandler = () => {
  console.log(1);
};

const headerAppsIconClickHandler = () => {
  console.log(2);
};


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseHoverMicrophoneIcon: false,
      searchByVoiceTipMidX: 0,
      searchByVoiceTipY: 0,
    };
  }

  componentDidMount() {
    GNEmitter.once(GNEvents.MICROPHONE_ICON_DID_MOUNT, (microphone) => {
      const { bottom, left, right } = microphone.getBoundingClientRect();
      this.setState({
        searchByVoiceTipMidX: left + (right - left) / 2,
        searchByVoiceTipTopY: bottom,
      });
    });

    GNEmitter.addListener(GNEvents.MICROPHONE_ICON_MOUSE_OVER, (v) => {
      this.setState({
        isMouseHoverMicrophoneIcon: v,
      });
    });
  }

  render() {
    const { isMouseHoverMicrophoneIcon, searchByVoiceTipMidX, searchByVoiceTipTopY } = this.state;

    return (
      <HomepageWrapper>
        <HomepageContentWrapper>
          <Header onAppsIconClick={headerAppsIconClickHandler} />
          <Main />
          <Footer onSettingsLinkClick={footerSettingsLinkClickHandler} />
        </HomepageContentWrapper>

        {
          isMouseHoverMicrophoneIcon
          && <SearchByVoiceTip midX={searchByVoiceTipMidX} topY={searchByVoiceTipTopY} />
        }
      </HomepageWrapper>
    );
  }
}

export default Homepage;
