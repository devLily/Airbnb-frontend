import React from "react";
import styled from "styled-components";
import { ImStarEmpty } from "react-icons/im";
import { BsSuitHeart } from "react-icons/bs";

import Image from "../components/elements/Image";

const PostList = (props) => {
  return (
    <PostListContainer>
      <HeaderWrap>
        <SpanTitle>300개 이상의 숙소</SpanTitle>
        <TextTitle>부산의 숙소</TextTitle>
        <HeaderButtonWrap>
          <PostListItem>
            <LiButton>취소 수수료 없음</LiButton>
          </PostListItem>
          <PostListItem>
            <LiButton>숙소 유형</LiButton>
          </PostListItem>
          <PostListItem>
            <LiButton>요금</LiButton>
          </PostListItem>
          <PostListItem>
            <LiButton>즉시 예약</LiButton>
          </PostListItem>
          <PostListItem>
            <LiButton>필터 추가하기</LiButton>
          </PostListItem>
        </HeaderButtonWrap>
        <TitleText>
          여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
          있습니다.
        </TitleText>
        <br />
        <TitleTextSec>
          예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.{" "}
          <TitleTextLink href="#" target="_self">
            자세히 알아보기
          </TitleTextLink>
        </TitleTextSec>
      </HeaderWrap>
      <PostListWrap>
        <PostListItem>
          <ImageWrap>
            <Images src="/images/eorn.jpeg" alt="" />
          </ImageWrap>
          <DetailWrap>
            <RoomName>roomName</RoomName>
            <TitleTextSec>contents</TitleTextSec>
            <ImStarEmpty /> 0.0 (후기 0개)
          </DetailWrap>
          <BsSuitHeart />
        </PostListItem>
      </PostListWrap>
    </PostListContainer>
  );
};

export default PostList;

const PostListContainer = styled.div`
  padding-top: 100px;
  display: block;
`;

const HeaderWrap = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #edebe0;
`;

const HeaderButtonWrap = styled.ul`
  list-type: none;
  display: flex;
  align-items: center;
`;

const PostListWrap = styled.ul`
  list-type: none;
  display: grid;
  gap: 12px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(0, calc(100% - 108px)) 100%;
  grid-auto-flow: column;
`;

const PostListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 5px;
`;

const LiButton = styled.button`
  cursor: pointer;
  text-align: center;
  border: 1px solid rgb(176, 176, 176);
  background-color: rgb(255, 255, 255);
  outline: none;
  margin: 0px;
  border-radius: 30px;
  color: rgb(34, 34, 34);
  position: relative;
  padding: 8px 16px;
  font-size: 12px;
  line-height: 16px;

  border-radius: 15px;
  white-space: nowrap;
  //padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ImageWrap = styled.div``;

const Images = styled.img`
  width: 300px;
  height: 300px;
`;

const SpanTitle = styled.span`
  font-size: 14px;
  margin: 5px;
  padding: 5px;
  line-height: 18px;
  color: var(--gp-explore-page-title-kicker-text-color, #222222);
  background-color: var(--gp-explore-page-title-kicker-bgcolor);
  padding-bottom: 8px;
`;

const TitleText = styled.p`
  /* margin: 5px; */
  margin-left: 5px;
  padding: 5px;
  color: #a7a7a7;
`;

const TitleTextSec = styled.p`
  margin-left: 5px;
  padding: 5px;
`;

const RoomName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const TextTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-left: 5px;
  margin-top: 5px;
  padding: 5px;
`;

const TitleTextLink = styled.a`
  color: #222222;
  /* border-bottom: 1px solid #222222; */
`;
