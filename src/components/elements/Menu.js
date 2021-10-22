import { useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Cookies } from "react-cookie";

import { actionCreators as modalActions } from "../../features/modal";
import { actionCreators as userActions } from "../../features/user";

import styled from "styled-components";

export default function Menu({ toggleMenu }) {
  const menuRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOutside = useCallback(
    (event) => {
      const isMenuElementChildren = menuRef.current.contains(event.target);
      console.log("isMenuElementChildren", isMenuElementChildren);
      if (menuRef.current && !isMenuElementChildren) {
        toggleMenu(false);
      }
    },
    [toggleMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, menuRef]);

  const cookies = new Cookies();
  const isLogin = cookies.get("token") ? true : false;
  console.log("이즈로그인", isLogin);

  const openLogin = () => {
    dispatch(modalActions.ShowLogin(true));
  };

  const openTempLogin = () => {
    dispatch(modalActions.ShowTempLogin(true));
  };

  const logOut = () => {
    cookies.remove("token");
    history.replace("/");
  };

  if (!isLogin) {
    return (
      <MenuContainer className="menu-container" ref={menuRef}>
        <MenuListWrap>
          <MenuListItem>
            <MenuListButton onClick={openTempLogin}>로그인</MenuListButton>
          </MenuListItem>
          <MenuListItem>
            <MenuListButton onClick={openLogin}>회원가입</MenuListButton>
          </MenuListItem>
        </MenuListWrap>
      </MenuContainer>
    );
  }

  return (
    <MenuContainer className="menu-container" ref={menuRef}>
      <MenuListWrap>
        <MenuListItem>
          <MenuListButton onClick={logOut}>로그아웃</MenuListButton>
        </MenuListItem>
      </MenuListWrap>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  display: block;
  position: absolute;
  top: 42px;
  right: 0;
  min-width: 150px;
  min-height: 40px;
`;

const MenuListWrap = styled.ul`
  list-style: none;
`;

const MenuListItem = styled.li`
  list-style: none;
  border-top: 1px solid #eeeeee;
  width: 100%;
  &:first-child {
    border-top: 0;
    button {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
  &:last-child {
    button {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

const MenuListButton = styled.button`
  background-color: transparent;
  border: 0;
  color: #333333;
  cursor: pointer;
  text-align: left;
  line-height: 40px;
  width: 100%;
  padding-left: 20px;
  &:hover {
    background-color: #eeeeee;
  }
`;
