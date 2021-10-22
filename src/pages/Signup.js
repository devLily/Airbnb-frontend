import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Button from "../components/elements/Button";

import { actionCreators as userActions } from "../features/user";
import { actionCreators as modalActions } from "../features/modal";

const Signup = (props) => {
  const dispatch = useDispatch();
  const eMail = useSelector((state) => state.user.email);

  React.useEffect(() => {
    console.log("사인업컴포이메일", eMail);
    console.log("사인업컴포이메일값", eMail[0].email);
  }, [eMail]);

  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [birth, setBirth] = React.useState();
  const [pw, setPW] = React.useState();

  const signUpData = {
    username: lastName + firstName,
    birth: birth,
    email: eMail[0].email,
    password: pw,
  };
  console.log("사인업데이터", signUpData);
  console.log("생년월일타입확인", typeof userName);

  const changeFN = (e) => {
    setFirstName(e.target.value);
    console.log("퍼스트네임", e.target.value);
  };

  const changeLN = (e) => {
    setLastName(e.target.value);
    console.log("라스트네임", e.target.value);
  };

  const changeBirth = (e) => {
    setBirth(e.target.value);
    console.log("생년월일", e.target.value);
  };

  const changePW = (e) => {
    setPW(e.target.value);
    console.log("패스워드", e.target.value);
  };

  const addAccount = () => {
    dispatch(userActions.createAccountMW(signUpData));
    dispatch(modalActions.ShowSignup(false));
    dispatch(modalActions.ShowWelcome(true));
  };

  const goBack = () => {
    dispatch(modalActions.ShowLogin(true));
    dispatch(modalActions.ShowSignup(false));
  }

  return (
    <React.Fragment>
      <Wrap>
        <ModalBG>
          <TitleDiv>
          <ExitBtn onClick={goBack}>{'<'}</ExitBtn>
          <Title>회원 가입 완료하기</Title>
          </TitleDiv>
          <Hr></Hr>
          <InputTop placeholder="이름(예: 길동)" onChange={changeFN}></InputTop>
          <InputBottom
            placeholder="성(예: 홍)"
            onChange={changeLN}
          ></InputBottom>
          <InfoMsg>
            정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
          </InfoMsg>
          <InputDate
            type="date"
            data-placeholder="생년월일" required aria-required="true"
            onChange={changeBirth}
          ></InputDate>
          <InfoMsg>
            만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은
            에어비앤비의 다른 회원에게 공개되지 않습니다.
          </InfoMsg>
          <InputNormal
            placeholder="이메일"
            value={eMail[0].email}
          ></InputNormal>
          <InfoMsg>예약 확인과 영수증을 이메일로 보내드립니다.</InfoMsg>
          <InputDiv>
            <InputNormal
              placeholder="비밀번호"
              onChange={changePW}
            ></InputNormal>
            <Span></Span>
            {/* <Label>비밀번호</Label> */}
            <InfoMsg>
              아래의 동의 및 계속하기 버튼을 선택하면, 에어비앤비의 서비스 약관,
              결제 서비스 약관, 개인정보 처리방침, 차별 금지 정책에 동의하는
              것입니다.
            </InfoMsg>
          </InputDiv>
          <Button
            width="90%"
            height="48px"
            backGround="#da0d63"
            color="#ffffff"
            _onClick={addAccount}
          >
            동의 및 계속하기
          </Button>
          <Hr></Hr>
          <InfoMsg>
            에어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅 이메일, 푸시
            알림을 보내드립니다. 계정 설정 또는 마케팅 알림에서 언제든지 메시지
            수신을 거부할 수 있습니다.
          </InfoMsg>
          <CheckBoxDiv>
            <InputCheck type="checkbox" name="" value="" />
            <InfoMsg2>
              에어비앤비에서 보내는 마케팅 메시지를 받고 싶지 않습니다.
            </InfoMsg2>
          </CheckBoxDiv>
        </ModalBG>
      </Wrap>
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
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const ExitBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 5px;
  top: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 14px auto 6px auto;
`;

const InfoMsg = styled.p`
  width: 90%;
  margin: 10px auto 18px auto;
  font-size: 12px;
  color: #afafaf;
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
  margin: 10px auto -3px auto;
  border: 1px solid #afafaf;
  border-radius: 8px 8px 0 0;
`;

const InputBottom = styled.input`
  width: 90%;
  height: 56px;
  margin: auto;
  border: 1px solid #afafaf;
  border-radius: 0 0 8px 8px;
`;

const InputDiv = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const InputDate = styled.input`
  width: 90%;
  height: 56px;
  margin: auto;
  border: 1px solid #afafaf;
  border-radius: 8px;
  &::before {content:attr(data-placeholder); width:100%; color:#858585;}
  &:focus::before,
  &:valid::before {display:none}
`;

const InputNormal = styled.input`
  width: 90%;
  height: 56px;
  margin: auto;
  border: 1px solid #afafaf;
  border-radius: 8px;
  &:focus ~ label,
  &:valid ~ label {
    top: -5px;
    color: #2691d9;
  }
`;

const Span = styled.span`
  &::before {
  }
`;

const Label = styled.label`
  position: absolute;
  top: 49%;
  left: 12%;
  transform: translate(-50%);
`;

const CheckBoxDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const InputCheck = styled.input`
  width:20px;
`;

const InfoMsg2 = styled.p`
  width: 90%;
  margin: 10px auto 18px auto;
  font-size: 12px;
  color: #222222;
`;

export default Signup;
