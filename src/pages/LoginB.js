import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "../components/elements/Button";

import { actionCreators as userActions } from "../features/user";
import { actionCreators as modalActions } from "../features/modal";

const LoginB = (props) => {
  const dispatch = useDispatch();

  const [eMail, setEmail] = React.useState();

  const eMailData = {
    email: eMail,
  };
  console.log("이메일데이터", eMailData);

  const changeEM = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const openSignUp = () => {
    dispatch(modalActions.ShowLogin_B(false));
    dispatch(modalActions.ShowSignup(true));
    dispatch(userActions.createEmail(eMailData));
  };

  return (
    <React.Fragment>
      <ModalBG>
        <Wrap>
          <Title>로그인 또는 회원가입</Title>
          <Hr></Hr>
          <SubTitle>에어비앤비에 오신 것을 환영합니다.</SubTitle>
          <InputNormal onChange={changeEM} placeholder="이메일"></InputNormal>
          <Button
            width="90%"
            height="48px"
            backGround="#da0d63"
            color="#ffffff"
            fontSize="16px"
            _onClick={openSignUp}
          >
            계속
          </Button>
          <HrText>또는</HrText>
          <Button
            width="90%"
            height="48px"
            border="2px solid #afafaf"
            color="#afafaf"
            backGround="#ffffff"
            fontSize="14px"
          >
            페이스북으로 로그인하기
          </Button>
          <Button
            width="90%"
            height="48px"
            border="2px solid #afafaf"
            color="#afafaf"
            backGround="#ffffff"
            fontSize="14px"
          >
            구글로 로그인하기
          </Button>
          <Button
            width="90%"
            height="48px"
            border="2px solid #afafaf"
            color="#afafaf"
            backGround="#ffffff"
            fontSize="14px"
          >
            Apple 계정으로 계속하기
          </Button>
          <Button
            width="90%"
            height="48px"
            border="2px solid #afafaf"
            color="#afafaf"
            backGround="#ffffff"
            fontSize="14px"
          >
            전화번호로 로그인하기
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

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 14px auto 6px auto;
`;

const SubTitle = styled.p`
  width: 90%;
  font-size: 22px;
  font-weight: 500;
  margin: 20px auto 20px auto;
`;

const InfoMsg = styled.p`
  width: 90%;
  margin: 10px auto 18px auto;
  font-size: 12px;
  color: #000000;
`;

const Hr = styled.hr`
  width: 100%;
  min-height: 1px;
  border: none;
  background-color: #e4e3e4;
`;

const InputNormal = styled.input`
  width: 90%;
  min-height: 56px;
  margin: auto;
  border: 1px solid #afafaf;
  border-radius: 8px;
  &:focus ~ label,
  &:valid ~ label {
    top: -5px;
    color: #2691d9;
  }
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

export default LoginB;
