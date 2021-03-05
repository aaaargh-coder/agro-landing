import React from "react";
import styled from "styled-components";

import { Button } from "components/common";

const Select = ({
  placeholder,
  options,
  value,
  expanded,
  onClick,
  onSelect,
  ...rest
}) => (
  <Wrapper {...rest}>
    <Button green outlined select onClick={onClick}>
      {value || placeholder}
    </Button>
    <List expanded={expanded}>
      {options.map((option) => (
        <Li onClick={() => onSelect(option)} selected={option === value}>
          {option}
        </Li>
      ))}
    </List>
  </Wrapper>
);

export default Select;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;

  > button {
    background-color: #fff;
    z-index: 2;
  }
`;

const List = styled.ul`
  position: absolute;
  background: ${({ expanded }) => (expanded ? "#fff" : "transparent")};
  top: 72px;
  right: 0;
  left: 0;
  border-radius: 0 0 12px 12px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ expanded }) => (expanded ? "#439f41" : "transparent")};
  border-top: none;
  padding: 42px 4px 12px 4px;
  margin-top: -36px;
  max-height: ${({ expanded }) => (expanded ? "300px" : 0)};
  z-index: 1;
  pointer-events: ${({ expanded }) => (expanded ? "default" : "none")};

  > li {
    max-height: ${({ expanded }) => (expanded ? "300px" : 0)};
    opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  }
`;

const Li = styled.li`
  padding: 12px 36px;
  border-radius: 6px;
  color: ${({ selected }) => (selected ? "#fff" : "#439f41")};
  background: ${({ selected }) => (selected ? "#439f41" : "transparent")};
  cursor: pointer;
`;
