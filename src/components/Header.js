import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";

export default function Header(props) {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoImage src="/images/Airbnb_Logo.png" alt="logo" />
      </LogoLink>

      <ButtonWrap>
        <HeaderButton onClick={toLogin}>Login</HeaderButton>
        <HeaderButton onClick={toSignup}>Signup</HeaderButton>
      </ButtonWrap>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: #0438ae;
  display: flex;
  justify-content: space-between;
  align-items: cneter;
  width: 100%;
  height: 70px;
  padding: 0 20px;
`;

const LogoLink = styled(Link)`
  display: block;
`;

const LogoImage = styled.img`
  width: 150px;
  height: 70px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
