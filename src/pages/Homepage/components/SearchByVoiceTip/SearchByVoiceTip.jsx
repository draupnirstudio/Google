import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TRIANGLE_BORDER_LENGTH = 6;
const TRIANGLE_LEFT_POSITION = 45.5;
const TRIANGLE_MARGIN_TOP = 15;


const SearchByVoiceTipWrapperGenerator = (left, top) => styled.div`
  position: absolute;
  top: ${top}px;
  left: ${left}px;
  background: rgb(45, 45, 45);
  border: 1px solid #fff;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  height: 29px;
  line-height: 29px;
  padding: 0 10px;
  text-align: center;
  white-space: nowrap;
  z-index: 2000;
  box-shadow: rgba(0,0,0,0.2) 0 1px 4px;
  transition: opacity 0.13s ease 0s;
`;

const SearchByVoiceTipTriangleWrapper = styled.div`
  position: absolute;
  top: -${TRIANGLE_BORDER_LENGTH}px;
  left: ${TRIANGLE_LEFT_POSITION}px;
  border-width: 0 ${TRIANGLE_BORDER_LENGTH}px ${TRIANGLE_BORDER_LENGTH}px;
  border-style: solid;
  border-color: #fff transparent;
  content: "";
  font-size: 0;
  width: 0;
  height:0;
  line-height: 0;
`;
const SearchByVoiceTipTriangleBackground = styled.div`
  position: absolute;
  top: 1px;
  left: -${TRIANGLE_BORDER_LENGTH}px;
  border-width: 0 ${TRIANGLE_BORDER_LENGTH}px ${TRIANGLE_BORDER_LENGTH}px;
  border-style: solid;
  border-color: #2d2d2d transparent;
  content: "";
  font-size: 0;
  width: 0;
  height:0;
  line-height: 0;
`;

function SearchByVoiceTip(props) {
  const { midX, topY } = props;
  const SearchByVoiceTipWrapper = SearchByVoiceTipWrapperGenerator(
    midX - TRIANGLE_BORDER_LENGTH - TRIANGLE_LEFT_POSITION, topY + TRIANGLE_MARGIN_TOP,
  );

  return (
    <SearchByVoiceTipWrapper>
      Search by voice
      <SearchByVoiceTipTriangleWrapper>
        <SearchByVoiceTipTriangleBackground />
      </SearchByVoiceTipTriangleWrapper>
    </SearchByVoiceTipWrapper>
  );
}

SearchByVoiceTip.propTypes = {
  midX: PropTypes.number.isRequired,
  topY: PropTypes.number.isRequired,
};

export default SearchByVoiceTip;
