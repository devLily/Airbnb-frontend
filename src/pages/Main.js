import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../components/elements/Image";
import LocationPost from "../components/LocationPost";
import FeaturePost from "../components/FeaturePost";
import ExperPost from "../components/ExperPost";
import styled from "styled-components";

export default function Main(props) {
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
        <PostWraps>
          <ExperPost />
        </PostWraps>
      </PostSection>
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
