import React from "react";
import styled from "styled-components";

const Button = (props) => {
    
    const { children, _onClick, text, width, height, padding, border, borderRadius, color, backGround } = props;
    const styles = {
        width: width,
        height: height,
        padding: padding,
        border: border,
        borderRadius: borderRadius,
        color: color,
        backGround: backGround,
    };


    return (
        <React.Fragment>
            <DefaultBtn {...styles} onClick = {_onClick}>{text? text : children}</DefaultBtn>
        </React.Fragment>
    )
}

Button.defaultProps = {
    children: null,
    _onClick: () => { },
    text: false,
    width: "100%",
    height: "auto",
    padding: "10px 10px",
    border: "1px solid #ffffff",
    borderRadius: "0px",
    backGround: "#ffffff"
};

const DefaultBtn = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    border: ${(props) => props.border};
    border-radius: 8px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backGround};
    box-sizing: boder-box;

    margin: 8px auto;
`;

export default Button;