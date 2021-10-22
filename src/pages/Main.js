import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Image from "../components/elements/Image";
import Login from "./Login";
import LoginB from "./LoginB";
import Signup from "./Signup";
import Welcome from "./Welcome";
import Templogin from "./TempLogin";
import LocationPost from "../components/LocationPost";
import FeaturePost from "../components/FeaturePost";
import ExperPost from "../components/ExperPost";
import styled from "styled-components";
import { actionCreators as modalActions } from "../features/modal";

export default function Main(props) {
  const dispatch = useDispatch();
  const loginCtrl = useSelector((state) => state.modal.login);
  const loginCtrlB = useSelector((state) => state.modal.login_B);
  const signUpCtrl = useSelector((state) => state.modal.signup);
  const welcomeCtrl = useSelector((state) => state.modal.welcome);
  const tempLoginCtrl = useSelector((state) => state.modal.templogin);

  const openLogin = () => {
    dispatch(modalActions.ShowLogin(true));
  };
  return (
    <MainConatainer>
      <SearchSection></SearchSection>
      <PostSection>
        <LocationTitle>가까운 여행지 둘러보기</LocationTitle>
        <PostWrap>
          <LocationPost />
        </PostWrap>
      </PostSection>
      <PostSection>
        <LocationTitle>어디에서나, 여행은 살아보는 거야!</LocationTitle>
        <PostWraps>
          <FeaturePost />
        </PostWraps>
      </PostSection>
      <PostSection>
        <HostingSection>
          <HostWrap>
            <HostingText>호스팅 시작하기</HostingText>
            <HostText>
              집을 공유하여 부수입을 올리고 새로운
              <br /> 가능성을 만나세요
            </HostText>
          </HostWrap>
        </HostingSection>
      </PostSection>
      <PostSection>
        <PostWraps>
          <ExperPost />
        </PostWraps>
      </PostSection>
      {loginCtrl ? <Login /> : null}
      {loginCtrlB ? <LoginB /> : null}
      {signUpCtrl ? <Signup /> : null}
      {welcomeCtrl ? <Welcome /> : null}
      {tempLoginCtrl ? <Templogin /> : null}
    </MainConatainer>
  );
}

const MainConatainer = styled.div``;

const SearchSection = styled.section`
  width: 100vw;
  height: 80vh;
  background: url(/images/airbnbBack.jpeg);
  background-size: cover;
  background-position: bottom;
  margin-top: -80px;
`;

const PostSection = styled.section`
  padding: 50px 20px;
`;

const PostWrap = styled.div`
  margin-top: 28px;
  padding: 8px 0;
  scroll-padding: 0px 24px;
  overflow-x: auto;
  display: grid;
  gap: 12px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(0, calc(100% - 108px)) 100%;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
`;

const TitleWrap = styled.div`
  -webkit-box-orient: vertical;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  color: #222222;
`;

const PostWraps = styled.div`
  margin-top: 28px;
  display: grid;
  grid-auto-flow: column;
  overflow: auto hidden;
  //scroll-snap-type: x mandatory;
  gap: 12px;
  padding: 8px 0;
  //grid-auto-columns: calc(100% - 84px);
`;

const LocationTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  color: rgb(34, 34, 34);
  /* margin: 20px; */
`;

const HostingSection = styled.section`
  /* width: 1300px;
  height: 480px; */
  width: 100vw;
  height: 70vh;
  padding: 8px 0;
  background: url(/images/startHosting.jpeg);
  background-size: cover;
  background-position: bottom;
  border-radius: 15px;
  margin-top: -20px;
  display: flex;
  align-items: center;
`;

const HostingText = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
`;

const HostWrap = styled.div`
  width: 50%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-content: flex-start;
`;

const HostText = styled.p`
  color: white;
  margin: 10px;
`;

const HostBtn = styled.button`
  width: 110px;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  margin: 10px auto;
`;
