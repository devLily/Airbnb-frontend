import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "../components/elements/Button";

import { actionCreators as modalActions } from "../features/modal";

const Login = (props) => {
  const dispatch = useDispatch();

  const openLoginB = () => {
    dispatch(modalActions.ShowLogin(false));
    dispatch(modalActions.ShowLogin_B(true));
  };

  const exitModal = () => {
    dispatch(modalActions.ShowLogin(false));
  }

  return (
    <React.Fragment>
      <ModalBG>
        <Wrap>
          <TitleDiv>
            <ExitBtn onClick={exitModal}>+</ExitBtn>
            <Title>로그인 또는 회원가입</Title>
          </TitleDiv>
          <Hr></Hr>
          <SubTitle>에어비앤비에 오신 것을 환영합니다.</SubTitle>
          <Select>
            <option value="none">미국 (+1)</option>
            <option value="none">대한민국 (+82)</option>
          </Select>
          <InputBottom placeholder="전화번호"></InputBottom>
          <InfoMsg>
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
            데이터 요금이 부과됩니다. <Span>개인정보 처리방침</Span>
          </InfoMsg>
          <Button width="90%" backGround="#da0d63" color="#ffffff">
            계속
          </Button>
          <HrText>또는</HrText>
          <Button
            width="90%"
            border="2px solid #afafaf"
            backGround="#ffffff"
            color="#afafaf"
            fontSize="14px"
          >
            페이스북으로 로그인하기
          </Button>
          <Button
            width="90%"
            border="2px solid #afafaf"
            backGround="#ffffff"
            color="#afafaf"
            fontSize="14px"
          >
            구글로 로그인하기
          </Button>
          <Button
            width="90%"
            border="2px solid #afafaf"
            backGround="#ffffff"
            color="#afafaf"
            fontSize="14px"
          >
            Apple 계정으로 계속하기
          </Button>
          <Button
            width="90%"
            border="2px solid #afafaf"
            backGround="#ffffff"
            color="#afafaf"
            fontSize="14px"
            _onClick={openLoginB}
          >
            이메일로 계속하기
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
  height: 80vh;
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

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const ExitBtn = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 0px 0px 0px 3px;
  font-size: 30px;
  font-weight: 500;
  background-color: #ffffff00;
  border: none;
  border-radius: 5px;
  transform: rotate(45deg);
  outline: none;
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

const InfoMsg = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #222222;
  width: 90%;
  margin: 10px auto 18px auto;
`;

const Span = styled.span`
  font-weight: 550;
  text-decoration: underline;
`;

const Hr = styled.hr`
  width: 100%;
  min-height: 1px;
  border: none;
  background-color: #e4e3e4;
`;

const Select = styled.select`
  font-size: 16px;
  width: 90%;
  min-height: 56px !important;
  margin: 0 auto -1px auto;
  border: 1px solid #afafaf;
  border-radius: 8px 8px 0 0;
`;

const InputBottom = styled.input`
  font-size: 16px;
  font-weight: 350;
  color: #aeaeae;
  width: 90%;
  min-height: 56px !important;
  margin: auto;
  border: 1px solid #afafaf;
  border-radius: 0 0 8px 8px;
`;

const HrText = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #bdbdbd;
  font-size: 12px;
  margin: 8px 0px;
  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: #bdbdbd;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

export default Login;
