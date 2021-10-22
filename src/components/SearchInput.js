import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";

export default function SarchInput(props) {
  return <SearchWrap></SearchWrap>;
}

const SearchWrap = styled.div`
  border: 1px solid #dddddd;
  border-radius: 32px;
  color: #222222;
  display: flex;
  height: 66px;
  position: relative;
  width: 100%;
  box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%);
  background-color: #ffffff;
`;
