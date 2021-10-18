import React from "react";
import styled from "styled-components";

import Button from "../components/elements/Button";

const Login = (props) => {
    return (
        <React.Fragment>
<Wrap>
                <Title>로그인 또는 회원가입</Title>
                <Hr></Hr>
                <p>에어비앤비에 오신 것을 환영합니다.</p>
                <Select>
                    <option value="none">미국 (+1)</option>
                </Select>
                <input placeholder="전화번호"></input>
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


export default Login;