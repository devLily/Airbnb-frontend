import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Image from "../components/elements/Image";

import { actionCreators as postActions } from "../features/post";
import { actionCreators as imageActions } from "../features/image";
import styled from "styled-components";

export default function PostWriite(props) {
  const inputFile = useRef();
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const image = useSelector((state) => state.image.imageUrl);
  const isUploading = useSelector((state) => state.image.isUpload);
  const [inputValue, setInputValue] = useState({
    roomName: "",
    cost: 0,
    contents: "",
    location: "",
  });

  const { roomName, cost, contents, location } = inputValue;

  const onChangeInput = ({ target }) => {
    const { name, value } = target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onChangeInput();
    }
  };

  const selectFile = (e) => {
    console.log("target", e.target.files[0]);
    console.log(inputFile.current);

    const reader = new FileReader();
    const file = e.target.files[0];
    //const file = inputFile.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    console.log(inputFile.current);
    if (!inputFile.current || !inputFile.current.files.length) {
      alert("업로드할 파일을 선택해주세요");
      return;
    }

    dispatch(imageActions.uploadImageFB(inputFile.current.files[0]));
  };

  const onClickPost = () => {
    if (!roomName || !cost || !contents || !location) {
      alert("필수 입력값입니다");
      return;
    }
    console.log({ ...inputValue, image });
    dispatch(postActions.PostMiddleWare({ ...inputValue, image }));
  };

  return (
    <SubmitArea>
      <InputLabel htmlFor="roomName">Room name</InputLabel>
      <Inputs
        type="text"
        name="roomName"
        value={roomName}
        placeholder="호스팅하실 숙소의 이름을 입력해주세요"
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
        required
        autoFocus
      />
      <InputLabel htmlFor="cost">Cost</InputLabel>
      <Inputs
        type="number"
        name="cost"
        value={cost}
        placeholder="호스팅하실 숙소의 금액을 입력해주세요"
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
        required
        autoFocus
      />
      <InputLabel htmlFor="contents">Condition</InputLabel>
      <Inputs
        type="text"
        name="contents"
        value={contents}
        placeholder="호스팅하실 숙소의 내용을 입력해주세요"
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
        required
        autoFocus
      />
      <InputLabel htmlFor="location">Location</InputLabel>
      <Inputs
        type="text"
        name="location"
        value={location}
        placeholder="호스팅하실 숙소의 위치를 입력해주세요"
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
        required
        autoFocus
      />
      <ImgInput
        type="file"
        ref={inputFile}
        onChange={selectFile}
        accept="image/png, image/jpeg"
        disabled={isUploading}
      />
      <button onClick={uploadFB}>업로드하기</button>
      <p>미리보기</p>
      <Preview
        src={preview ? preview : "http://via.placeholder.com/400X300"}
        alt=""
      />
      <PostBtn onClick={onClickPost}>호스팅 하기</PostBtn>
    </SubmitArea>
  );
}

const SubmitArea = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 150px;
`;

const InputLabel = styled.label`
  text-align: left;
  min-width: 90px;
`;

const Inputs = styled.input`
  width: 300px;
  padding: 10px;
  margin: 20px;
  border-top: none;
  border-left: none;
  border-right: none;
  &:required {
    border-color: #ff385c;
    &:invalid {
      border-color: #ff385c;
    }
  }
`;

const ImgInput = styled.input`
  /* width: 100%; */
  margin: 0 auto;
`;

const PostBtn = styled.button`
  width: 100px;
  padding: 10px;
  margin: 10px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.4s ease-in;
  z-index: 1;
  &::before {
    background: #ff385c;
    content: "";
    z-index: -1;
  }
  &::after {
    background: #ff385c;
    content: "";
    z-index: -1;
  }
  &:hover {
    border: 2px solid #ff385c;
    color: #ff385c;
    background-color: white;
  }
`;

const Preview = styled.img`
  width: 400px;
  height: 300px;
`;
