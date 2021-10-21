import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    children,
    _onClick,
    text,
    fontSize,
    width,
    minHeight,
    padding,
    border,
    borderRadius,
    color,
    backGround,
  } = props;

  const styles = {
    fontSize: fontSize,
    width: width,
    minHeight: minHeight,
    padding: padding,
    border: border,
    borderRadius: borderRadius,
    color: color,
    backGround: backGround,
  };

  return (
    <React.Fragment>
      <DefaultBtn {...styles} onClick={_onClick}>
        {text ? text : children}
      </DefaultBtn>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  text: false,
  fontSize: "16px",
  width: "100%",
  minHeight: "auto",
  padding: "10px 10px",
  border: "1px solid #ffffff",
  borderRadius: "0px",
  backGround: "#ffffff",
};

const DefaultBtn = styled.button`
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  min-height: 48px;
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: 8px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backGround};
  box-sizing: boder-box;
  margin: 8px auto;
  text-align: center !important;
  line-height: 24px;
  &:hover {
    color: #494949;
    border: 2px solid #494949;
  }
`;

export default Button;
