import React from "react";
import styled from "styled-components";
import { ImStarEmpty } from "react-icons/im";
import { BsSuitHeart } from "react-icons/bs";

import Image from "../components/elements/Image";

export default function PostListItem(props) {
  return (
    <PostListWrap>
      <PostListItems>
        <ImageWrap>
          <Images src="/images/eorn.jpeg" alt="" />
          {/* <Images src={} alt="" /> */}
        </ImageWrap>
        <DetailWrap>
          <TitleText>user님의 숙소</TitleText>
          {/* <TitleText>{user}님의 숙소</TitleText> */}
          <RoomName>roomName</RoomName>
          {/* <RoomName>{roomName}</RoomName> */}
          <TitleText>contents</TitleText>
          {/* <TitleText>{contents}</TitleText> */}
          <StarWrap>
            <ImStarEmpty />
            <span>0.0 (후기 0개)</span>
          </StarWrap>
        </DetailWrap>
        <HeartWrap>
          <BsSuitHeart />
        </HeartWrap>
      </PostListItems>
    </PostListWrap>
  );
}

const PostListContainer = styled.div`
  padding-top: 100px;
  display: block;
`;

const HeaderWrap = styled.div`
  margin: 10px;
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

const PostListItems = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 5px 0;
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
  align-content: space-around;
`;
const ImageWrap = styled.div``;

const Images = styled.img`
  width: 300px;
  height: 300px;
`;

const SpanTitle = styled.span`
  font-size: 14px;
  padding: 5px;
  line-height: 18px;
  color: var(--gp-explore-page-title-kicker-text-color, #222222);
  background-color: var(--gp-explore-page-title-kicker-bgcolor);
  padding-bottom: 8px;
`;

const TitleText = styled.p`
  /* margin: 5px; */
  padding: 5px;
  color: #a7a7a7;
`;

const TitleTextSec = styled.p`
  padding: 5px;
`;

const RoomName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const TextTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
  padding: 5px;
`;

const TitleTextLink = styled.a`
  color: #222222;
  /* border-bottom: 1px solid #222222; */
`;

const StarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeartWrap = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;
