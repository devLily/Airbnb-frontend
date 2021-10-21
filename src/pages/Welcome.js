import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "../components/elements/Button";

import { actionCreators as modalActions } from "../redux/modules/modal";

const Signup = (props) => {
  const dispatch = useDispatch();

  const exitModal = () => {
    dispatch(modalActions.ShowWelcome(false));
  };

  return (
    <React.Fragment>
      <Wrap>
        <ModalBG>
          <Title>프로필 생성하기</Title>
          <Hr></Hr>
          <Img src="img/airbnblogo.png" />
          <SubTitle>에어비앤비에 오신 것을 환영합니다.</SubTitle>
          <SubMsg>
            전 세계 숙소, 현지 레스토랑 및 독특한 체험을 찾아보세요.
          </SubMsg>
          <Button
            width="100%"
            height="48px"
            backGround="#222222"
            color="#ffffff"
            _onClick={exitModal}
          >
            계속
          </Button>
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
  min-height: 317px;
  padding: 20px;
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
  /* margin: 14px auto 6px auto; */
`;

const SubTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #222222;
  width: 90%;
  text-align: center;
  /* margin: 20px auto 20px auto; */
`;

const SubMsg = styled.p`
  width: 90%;
  /* margin: 10px auto 18px auto; */
  font-size: 16px;
  color: #222222;
  text-align: center;
`;

const Hr = styled.hr`
  width: 100%;
  min-height: 1px;
  border: none;
  background-color: #e4e3e4;
`;

const Img = styled.img`
  height: 55px;
`;

export default Signup;
