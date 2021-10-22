import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Image from "./elements/Image";

import styled from "styled-components";

export default function FeaturePost(props) {
  const featureList = [
    {
      src: "/images/experience.jpeg",
      text: "자연생활을 만끽할 수 있는 숙소",
      key: 1,
    },
    {
      src: "/images/uniqueSpace.jpeg",
      text: "독특한 공간",
      key: 2,
    },
    {
      src: "/images/PetAllowed.jpeg",
      text: "집전체",
      key: 3,
    },
    {
      src: "/images/wholeHouse.jpeg",
      text: "반려동물 동반 가능",
      key: 4,
    },
  ];
  return (
    <>
      {featureList.map((post) => {
        return (
          <Image key={post.key} src={post.src} size="medium" text={post.text} />
        );
      })}
      {/* // src="/images/seo.jpeg" // alt="" // size="small" // text="서울" //
      disText="차로 15분거리" /> */}
    </>
  );
}
