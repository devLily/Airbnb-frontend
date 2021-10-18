import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "../components/elements/Button";

// import {actionCreators as modalActions} from "../redux/modules/modal"

const Signup = (props) => {

    // const dispatch = useDispatch();

    // const goToLogin = () => {
    //     dispatch(modalActions.loginShow(true));
    //     dispatch(modalActions.signupShow(false));
    // }

    return (
        <React.Fragment>
            <Wrap>
                <Title>로그인 또는 회원가입</Title>
                <Hr></Hr>
                <InputTop placeholder="전화번호"></InputTop>
                <InputBottom placeholder="전화번호"></InputBottom>
                <h5>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다. 개인정보 처리방침</h5>
                <Button
                    width="90%"
                    height="48px"
                    backGround="#da0d63"
                    color="#ffffff"
                    // _onClick={}
                >계속</Button>
                <HrText>또는</HrText>
                <Button
                    width="90%"
                    height="48px"
                    border="2px solid #afafaf"
                    backGround="#ffffff"
                >페이스북으로 로그인하기</Button>
                <Button
                    width="90%"
                    height="48px"
                    border="2px solid #afafaf"
                    backGround="#ffffff"
                >구글로 로그인하기</Button>
                <Button
                    width="90%"
                    height="48px"
                    border="2px solid #afafaf"
                    backGround="#ffffff"
                >Apple 계정으로 계속하기</Button>
                <Button
                    width="90%"
                    height="48px"
                    border="2px solid #afafaf"
                    backGround="#ffffff"
                >이메일로 로그인하기</Button>
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
    font-size: 18px;
    margin: auto;
`;

const Hr = styled.hr`
    width: 100%;
`;

const Select = styled.select`
    width: 90%;
    margin: auto;
`;

const InputTop = styled.input`
    width: 90%;
    height: 56px;
    margin: auto;
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

const HrText = styled.div`
    display: flex;
	flex-basis: 100%;
	align-items: center;
	color: rgba(0, 0, 0, 0.35);
	font-size: 12px;
	margin: 8px 0px;
    &::before,
    &::after {
        content: "";
	    flex-grow: 1;
	    background: rgba(0, 0, 0, 0.35);
	    height: 1px;
	    font-size: 0px;
	    line-height: 0px;
	    margin: 0px 16px;
    }

`;

export default Signup;