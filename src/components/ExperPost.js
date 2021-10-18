import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Image from "./elements/Image";

import styled from "styled-components";

export default function ExperPost(props) {
  const featureList = [
    {
      src: "/images/enjoyNature.jpeg",
      text: "체험",
      disText: "가까운 곳에서 즐길 수 있는 잊지 못할 체험을 찾아보세요.",
      key: 1,
    },
    {
      src: "/images/online.jpeg",
      text: "온라인 체험",
      disText: "호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요.",
      key: 2,
    },
    {
      src: "/images/Recommended.jpeg",
      text: "추천 컬렉션: 여행 본능을 깨우는 체험",
      disText: "온라인 체험으로 집에서 랜선 여행을 즐기세요.",
      key: 3,
    },
  ];

  return (
    <>
      {featureList.map((post) => {
        return (
          <Image
            key={post.key}
            src={post.src}
            size="medium"
            text={post.text}
            disText={post.disText}
          />
        );
      })}
    </>
  );
}
