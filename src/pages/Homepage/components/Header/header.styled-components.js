import styled from 'styled-components';


export const HeaderWrapper = styled.div`
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

export const HeaderLink = styled.a`
  display: inline-block;
  height: 24px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
