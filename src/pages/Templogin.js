import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Button from "../components/elements/Button";

import { actionCreators as userActions } from "../features/user";
import { actionCreators as modalActions } from "../features/modal";

const Templogin = (props) => {
  const dispatch = useDispatch();
  const eMail = useSelector((state) => state.user.email);
  const [pw, setPW] = React.useState();

  const changePW = (e) => {
    setPW(e.target.value);
    console.log("템프로그인패스워드", e.target.value);
  };

  const loginData = {
    email: eMail[0].email,
    password: pw,
  };
  console.log("로그인데이터", loginData);

  const loginComplete = () => {
    window.alert("로그인 완료");
    dispatch(userActions.loginMW(loginData));
    dispatch(modalActions.ShowTempLogin(false));
  };

  return (
    <React.Fragment>
      <ModalBG>
        <Wrap>
          <Title>로그인</Title>
          <Hr></Hr>
          <SubTitle>에어비앤비에 오신 것을 환영합니다.</SubTitle>
          <InputTop value={eMail[0].email}></InputTop>
          <InputBottom
            type="password"
            placeholder="비밀번호"
            onChange={changePW}
          ></InputBottom>
          {/* <InfoMsg>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다. <Span>개인정보 처리방침</Span></InfoMsg> */}
          <Button
            width="90%"
            backGround="#da0d63"
            color="#ffffff"
            _onClick={loginComplete}
          >
            로그인
          </Button>
        </Wrap>
      </ModalBG>
    </React.Fragment>
  );
};

const ModalBG = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80vw;
  max-width: 568px;
  height: 40vh;
  background-color: #ffffff;
  z-index: 40;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.24);
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #222222;
  margin: 14px auto 6px auto;
`;

const SubTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #222222;
  width: 90%;
  margin: 20px auto 20px auto;
`;

const Hr = styled.hr`
  width: 100%;
  min-height: 1px;
  border: none;
  background-color: #e4e3e4;
`;

const InputTop = styled.input`
  width: 90%;
  height: 56px;
  margin: 10px auto -1px auto;
  border: 1px solid #afafaf;
  border-radius: 8px 8px 0 0;
`;

const InputBottom = styled.input`
  font-size: 16px;
  font-weight: 350;
  color: #aeaeae;
  width: 90%;
  min-height: 56px !important;
  margin: 0 auto 20px auto;
  border: 1px solid #afafaf;
  border-radius: 0 0 8px 8px;
`;

export default Templogin;
