import React from "react";
import styled from "styled-components";
import {HOMEPAGE_LINKS} from "@constant/homepage_links";

const SignInButtonWrapper = styled.div`
  border: 1px solid #4285f4;
  font-weight: bold;
  outline: none;
  background: #4285f4;
  color: white;
  height: 30px;
  line-height: 28px;
  padding: 0 12px;
  border-radius: 2px;
  background: linear-gradient(top, #4387fd, #4683ea);
  cursor:default;
  
  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, .15);
  }
`;

const signInButtonClickHandler = () => {
  window.location.href = HOMEPAGE_LINKS.SIGN_IN.link;
};


function SignInButton() {
  return (
    <SignInButtonWrapper onClick={signInButtonClickHandler}>{HOMEPAGE_LINKS.SIGN_IN.name}</SignInButtonWrapper>
  );
}

export default SignInButton;
