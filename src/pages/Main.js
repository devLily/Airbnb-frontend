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
    <>
      <LocationTitle>가까운 여행지 둘러보기</LocationTitle>
      <PostWrap>
        <LocationPost />
      </PostWrap>
      <LocationTitle>어디에서나, 여행은 살아보는 거야!</LocationTitle>
      <PostWraps>
        <FeaturePost />
      </PostWraps>
      <PostWraps>
        <ExperPost />
      </PostWraps>
    </>
  );
}

const PostWrap = styled.div`
  padding-left: 24px;
  scroll-padding: 0px 24px;
  overflow-x: auto;
  display: grid;
  gap: 12px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns:
    repeat(calc(var(--column-count) - 1), calc(100% - 108px))
    100%;
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
  display: grid;
  grid-auto-flow: column;
  overflow: auto hidden;
  //scroll-snap-type: x mandatory;
  gap: 12px;
  padding: 15px;
  //grid-auto-columns: calc(100% - 84px);
`;

const LocationTitle = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: rgb(34, 34, 34);
  margin: 20px;
`;
