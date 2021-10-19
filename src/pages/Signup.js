import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Button from "../components/elements/Button";

import { actionCreators as userActions } from "../redux/modules/user";
// import {actionCreators as modalActions} from "../redux/modules/modal"

const Signup = (props) => {

    const dispatch = useDispatch();
    const aaaaaa = useSelector((state) => state.user.list);

    // const goToLogin = () => {
    //     dispatch(modalActions.loginShow(true));
    //     dispatch(modalActions.signupShow(false));
    // }
    React.useEffect(() => {
        console.log("bbbbb", aaaaaa)
    }, [aaaaaa])

    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [PW, setPW] = React.useState();

    const signUpData = {
        firstName: firstName,
        lastName: lastName,
        pw: PW,
    }
    console.log("사인업데이터", signUpData)


    const changeFN = (e) => {
        setFirstName(e.target.value);
        console.log("퍼스트네임", e.target.value)
    }

    const changeLN = (e) => {
        setLastName(e.target.value);
        console.log("라스트네임", e.target.value)
    }

    const changePW = (e) => {
        setPW(e.target.value);
        console.log("패스워드", e.target.value)
    }

    const _createAccount = () => {
        dispatch(userActions.createAccountMW(signUpData));

    };


    return (
        <React.Fragment>
            <Wrap>
                <Title>회원 가입 완료하기</Title>
                <Hr></Hr>
                <InputTop placeholder="이름(예: 길동)" onChange={changeFN}></InputTop>
                <InputBottom placeholder="성(예: 홍)" onChange={changeLN}></InputBottom>
                <InfoMsg>정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.</InfoMsg>
                <InputNormal type="date" placeholder="생년월일"></InputNormal>
                <InfoMsg>만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의 다른 회원에게 공개되지 않습니다.</InfoMsg>
                <InputNormal placeholder="이메일"></InputNormal>
                <InfoMsg>예약 확인과 영수증을 이메일로 보내드립니다.</InfoMsg>
                <InputDiv>
                    <InputNormal placeholder="비밀번호" onChange={changePW}></InputNormal>
                    <Span></Span>
                    <Label>비밀번호</Label>
                    <InfoMsg>아래의 동의 및 계속하기 버튼을 선택하면, 에어비앤비의 서비스 약관, 결제 서비스 약관, 개인정보 처리방침, 차별 금지 정책에 동의하는 것입니다.</InfoMsg>
                </InputDiv>
                <Button
                    width="90%"
                    height="48px"
                    backGround="#da0d63"
                    color="#ffffff"
                    _onClick={_createAccount}
                >동의 및 계속하기</Button>
                <Hr></Hr>
                <InfoMsg>에어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅 이메일, 푸시 알림을 보내드립니다. 계정 설정 또는 마케팅 알림에서 언제든지 메시지 수신을 거부할 수 있습니다.</InfoMsg>
                <CheckBoxDiv>
                    <input type="checkbox" name="" value="" />
                    <InfoMsg2>에어비앤비에서 보내는 마케팅 메시지를 받고 싶지 않습니다.</InfoMsg2>
                </CheckBoxDiv>
            </Wrap>
        </React.Fragment>
    )
}


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

const InfoMsg = styled.p`
    width: 90%;
    margin: 10px auto 18px auto;
    font-size: 12px;
    color: #afafaf;
`;

const Hr = styled.hr`
    width: 100%;
`;

const InputTop = styled.input`
    width: 90%;
    height: 56px;
    margin: 10px auto -1px auto;
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

const InputNormal = styled.input`
    width: 90%;
    height: 56px;
    margin: auto;
    border: 1px solid #afafaf;
    border-radius: 8px;
    &:focus ~ label,
    &:valid ~ label{
        top: -5px;
        color: #2691d9
    } 
`;

const Span = styled.span`
    &::before{

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

const InfoMsg2 = styled.p`
    width: 90%;
    margin: 10px auto 18px auto;
    font-size: 12px;
    color: #222222;
`;

export default Signup;