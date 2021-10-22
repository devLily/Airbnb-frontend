import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { ImStarEmpty } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";

import Image from "../components/elements/Image";

export default function PostListItem({ post }) {
  //const user = useSelector((state) => state.user.)
  const { image, roomName, cost, contents } = post;
  console.log("post:", post);
  return (
    <PostListWrap>
      <PostListItems>
        <ImageWrap>
          {/* <Images src="/images/eorn.jpeg" alt="" /> */}
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
          <TitleText>user님의 숙소</TitleText>
          {/* <TitleText>{user}님의 숙소</TitleText> */}
          <RoomName>{roomName}</RoomName>
          <TitleText>{contents}</TitleText>
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

const TitleText = styled.p`
  /* margin: 5px; */
  padding: 5px;
  color: #a7a7a7;
`;

const RoomName = styled.p`
  font-size: 18px;
  font-weight: 500;
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
