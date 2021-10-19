import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../components/elements/Image";

import styled from "styled-components";

export default function PostWriite(props) {
  const inputFile = useRef();
  const uploadImg = (e) => {
    // if (fileInput.current) {
    // }
    const reader = new FileReader();
    const file = inputFile.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      //dispatch(imageActions.setPreview(reader.result));
      console.log();
    };
  };
  return <input type="file" inputRef={inputFile} onChange={uploadImg} />;
}
