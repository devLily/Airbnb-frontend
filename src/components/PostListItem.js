import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { ImStarEmpty } from "react-icons/im";
import { BsSuitHeart } from "react-icons/bs";

import Image from "../components/elements/Image";

export default function PostListItem({ post }) {
  const { image, roomName, cost, contents } = post;

  return (
    <PostListWrap>
      <PostListItems>
        <ImageWrap>
          <Images
            src={
              image
                ? image
                : "http://www.cleandropleon.com/sistema/assets/images/services/default.png"
            }
            alt=""
          />
        </ImageWrap>
        <DetailWrap>
          <TitleText>OOOO님의 숙소</TitleText>
          <RoomName>{roomName}</RoomName>
          <TitleText>{contents}</TitleText>
          <TitleText>{cost}원</TitleText>
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

const PostListWrap = styled.ul`
  list-style: none;
  display: grid;
  gap: 12px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(0, calc(100% - 108px)) 100%;
  grid-auto-flow: column;
`;

const PostListItems = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 5px;
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: space-around;
  flex: 1;
  padding-left: 10px;
`;
const ImageWrap = styled.div``;

const Images = styled.img`
  border-radius: 6px;
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

const RoomName = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
`;

const StarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const HeartWrap = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;
