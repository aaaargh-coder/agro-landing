import React from "react";
import styled from "styled-components";

const Input = ({ type, name, placeholder, value, onChange, className }) => {
  return (
    <StyledInput
      type={type || "text"}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  background: transparent;
  border-radius: 38px;
  outline: none;
  height: 76px;
  border: 2px solid #439f41;
  font-weight: bold;
  font-size: 2rem;
  line-height: 140%;
  color: #439f41;
  padding-left: 32px;
  box-sizing: border-box;

  &::placeholder {
    color: #439f41;
  }
`;
