import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, green, outlined, select, radio, ...rest }) => {
  return (
    <StyledButton
      green={green}
      outlined={outlined}
      select={select}
      radio={radio}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  position: relative;

  ${({ green, outlined }) =>
    green &&
    css`
      background: ${outlined ? "transparent" : "#439f41"};
      border: ${outlined ? "2px solid #439f41" : "none"};
      border-radius: 38px;
      color: ${outlined ? "#439f41" : "#fff"};
    `};

  ${({ select }) =>
    select &&
    css`
      background-image: url("img/arrow.png");
      background-repeat: no-repeat;
      background-position: 94%;
      text-align: left;
      padding: 0 32px;
    `};

  ${({ radio }) =>
    radio &&
    css`
      text-align: left;
      padding: 0 0 0 80px;

      &::before {
        content: "";
        position: absolute;
        width: 28px;
        height: 28px;
        left: 32px;
        top: 23px;
        border: 2px solid #439f41;
        box-sizing: border-box;
        border-radius: 50px;
      }

      &::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        left: 38px;
        top: 29px;
        background: #439f41;
        border-radius: 50px;
        transform: ${({ selected }) => `scale(${selected ? 1 : 0})`};
        transform-origin: center;
        transition: transform 0.3s ease;
      }
    `};
`;
