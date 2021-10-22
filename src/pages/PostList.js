import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PostListItem from "../components/PostListItem";
import { actionCreators as postActions } from "../features/post";

export default function PostList(props) {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  const { location } = useParams();

  useEffect(() => {
    console.log(location);

    if (!postList) {
      window.alert("등록된 포스트가 없습니다");
    }
    dispatch(postActions.getPostList(location));
  }, []);
  return (
    <PostListContainer>
      <HeaderWrap>
        <SpanTitle>300개 이상의 숙소</SpanTitle>
        <TextTitle>{location}의 숙소</TextTitle>
        <HeaderButtonWrap>
          <PostListItems>
            <LiButton>취소 수수료 없음</LiButton>
          </PostListItems>
          <PostListItems>
            <LiButton>숙소 유형</LiButton>
          </PostListItems>
          <PostListItems>
            <LiButton>요금</LiButton>
          </PostListItems>
          <PostListItems>
            <LiButton>즉시 예약</LiButton>
          </PostListItems>
          <PostListItems>
            <LiButton>필터 추가하기</LiButton>
          </PostListItems>
        </HeaderButtonWrap>
        <TitleText>
          여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
          있습니다.
        </TitleText>
        <br />
        <TitleTextSec>
          예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.{" "}
          <TitleTextLink href="#" target="self">
            자세히 알아보기
          </TitleTextLink>
        </TitleTextSec>
      </HeaderWrap>
      {postList.map((post) => {
        return <PostListItem key={post.id} post={post} />;
      })}
    </PostListContainer>
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
