import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  height: 100%;
  position: relative;
  text-align: center;
`;

export const MainWrapper = styled.div`
   display: inline-flex;
   flex-direction: column;
   align-self: center;
   position: relative;
   width:  584px;
   top: 110px;
   
   @media screen and (min-height: 768px) {
    top: 152px;
   }
`;
