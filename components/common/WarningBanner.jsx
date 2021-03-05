import React from "react";
import styled from "styled-components";

import WarningIcon from "icons/WarningIcon.svg";

const WarningBanner = ({ text }) => (
  <Container>
    <WarningIcon />
    <span>{text}</span>
  </Container>
);

export default WarningBanner;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff8e6;
  border-radius: 14px;
  height: 72px;

  > svg {
    margin: 0 18px 0 26px;
  }

  > span {
    color: #393e34;
  }
`;
