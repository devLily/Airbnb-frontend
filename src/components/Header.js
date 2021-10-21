import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import styled from "styled-components";
import { actionCreators as modalActions } from "../features/modal";
import useWindowScroll from "../hooks/useScroll";

import Menu from "./elements/Menu";
export default function Header(props) {
  const dispatch = useDispatch();
  const { position } = props;
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const loginCtrl = useSelector((state) => state.modal.login);
  const loginCtrlB = useSelector((state) => state.modal.login_B);
  const signUpCtrl = useSelector((state) => state.modal.signup);
  const welcomeCtrl = useSelector((state) => state.modal.welcome);

  const openLogin = () => {
    dispatch(modalActions.ShowLogin(true));
  };

  const toggleMenu = (isOpen) => {
    setOpenMenu(isOpen);
  };

  const { y: scrollY } = useWindowScroll();

  const isOnTop = scrollY === 0 && location.pathname === "/";

  if (position === "sticky") {
    return (
      <HeaderContainer isOnTop={isOnTop}>
        <LogoWrap>
          <LogoLink to="/">
            <div className="pc">
              <LogoImage src="/images/Airbnb.png" alt="logo" />
            </div>
            {/* <div className="mobile">
              <LogoImage src="/images/Airbnb.png" alt="logo" />
            </div> */}
          </LogoLink>
        </LogoWrap>
        <StcInputWrap>
          <StickyInput />
          <StickyBtn>
            <FaSearch size={13} color="white" />
          </StickyBtn>
        </StcInputWrap>
        <NavWrap>
          <HostLink to="/write">호스트 되기</HostLink>
          {/* <GrLanguage color={scrollY === 0 ? "white" : "#222222"} /> */}
          <MdOutlineLanguage color={isOnTop ? "white" : "#222222"} />
          <Label>
            <LabelBtn onClick={() => toggleMenu(true)}>
              <AiOutlineMenu size={14} color={isOnTop ? "white" : "#222222"} />
              <User src="/images/user.png" />
            </LabelBtn>
            {openMenu && <Menu toggleMenu={toggleMenu} />}
          </Label>
        </NavWrap>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoImage src="/images/Airbnb_Logo.png" alt="logo" />
      </LogoLink>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  background-color: ${(props) => (props.isOnTop ? "transparent" : "#ffffff")};
  color: ${(props) => (props.isOnTop ? "#ffffff" : "#222222")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: url(/images/airbnbBack.jpeg);
  background-size: cover; */
  /* display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  height: 30%; */

  /* background-color: #0438ae;
  display: flex;
  justify-content: space-between;
  align-items: cneter;
  width: 100%;
  height: 70px;
  padding: 0 20px; */
  transition: all 0.2s;

  * {
    transition: all 0.2s;
  }
  /* &::after {
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  } */
`;

const LogoWrap = styled.div``;

const LogoLink = styled(Link)`
  /* display: block; */
`;

const LogoImage = styled.img`
  /* margin: 20px; */
  width: 102px;
  height: 32px;
`;

const StcInputWrap = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 40px;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%);
  color: #222222;
  display: inline-flex;
  width: 40%;
  max-width: 100%;
  text-align: left;
  transition: box-shadow 0.2s ease;
  vertical-align: middle;
`;

const StickyInput = styled.input`
  border: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 15px;
  &:focus {
    outline: none;
  }
  flex: 1 1 0;
`;

const StickyBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: #ff385c;
  height: 32px;
  margin: 7px 7px 7px 0;
  padding: 10px;
  width: 32px;
`;

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > * {
    margin: 0 6px;
  }
`;

const HostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Label = styled.div`
  background: transparent;
  border: 1px solid #dddddd;
  border-radius: 21px;
  color: inherit;
  width: 80px;
  height: 40px;
  position: relative;
`;

const LabelBtn = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px 5px 5px 12px;
`;

const User = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
