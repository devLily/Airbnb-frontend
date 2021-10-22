import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Image from "./elements/Image";

import styled from "styled-components";

export default function LocationPost(props) {
  const locationList = [
    {
      src: "/images/seo.jpeg",
      text: "서울",
      disText: "차로 15분 거리",
      key: 1,
    },
    {
      src: "/images/pus.jpeg",
      text: "부산",
      disText: "차로 5시간 거리",
      key: 2,
    },
    {
      src: "/images/yang.png",
      text: "양양군",
      disText: "차로 2.5시간 거리",
      key: 3,
    },
    {
      src: "/images/sok.png",
      text: "속초시",
      disText: "차로 2.5시간 거리",
      key: 4,
    },
    {
      src: "/images/tae.jpeg",
      text: "대구",
      disText: "차로 4시간 거리",
      key: 5,
    },
    {
      src: "/images/wan.png",
      text: "완주군",
      disText: "차로 3시간 거리",
      key: 6,
    },
    {
      src: "/images/chn.jpeg",
      text: "전주시",
      disText: "차로 3시간 거리",
      key: 7,
    },
    {
      src: "/images/goseong.png",
      text: "고성군",
      disText: "차로 3시간 거리",
      key: 8,
    },
  ];
  return (
    <>
      {locationList.map((post) => {
        const { key, src, text, disText, location } = post;
        return (
          <Link key={key} to={`/searches?location=${location}`}>
            <Image
              key={key}
              src={src}
              size="small"
              text={text}
              disText={disText}
            />
          </Link>
        );
      })}
    </>
  );
}
