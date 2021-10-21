import React from "react";

import styled from "styled-components";

export default function Image(props) {
  const { src, size, text, disText } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (size === "small") {
    return (
      <SmallWrap>
        <SmallImg {...styles} />
        <TextWrap>
          <LocationText>{text}</LocationText>
          <DistanceText>{disText}</DistanceText>
        </TextWrap>
      </SmallWrap>
    );
  }

  if (size === "medium") {
    return (
      <MediumWrap>
        <MediumImg {...styles} />
        <FeatureText>{text}</FeatureText>
        <DistanceText>{disText}</DistanceText>
      </MediumWrap>
    );
  }

  if (size === "large") {
    return (
      <MediumWrap>
        <MediumImg {...styles} />
        <FeatureText>자{text}</FeatureText>
      </MediumWrap>
    );
  }
}

const SmallWrap = styled.div`
  display: flex;
  align-items: center;
  line-height: 20px;
`;

const SmallImg = styled.img`
  box-sizing: border-box;
  border-radius: 15px;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const TextWrap = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  margin-left: 12px;
`;

const LocationText = styled.span`
  flex: 0 1 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-bottom: 2px;
  font-size: 16px;
  line-height: 20px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  font-weight: bold;
`;

const DistanceText = styled.span`
  flex: 0 1 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  line-height: 20px;
  color: rgb(34, 34, 34);
  cursor: pointer;
`;

const MediumWrap = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
`;

const MediumImg = styled.img`
  box-sizing: border-box;
  width: 350px;
  height: 350px;
  border-radius: 15px;
  cursor: pointer;
`;

const FeatureText = styled.span`
  color: rgb(34, 34, 34);
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  white-space: pre-line;
  cursor: pointer;
  text-align: inherit;
  padding-top: 8px;
`;
