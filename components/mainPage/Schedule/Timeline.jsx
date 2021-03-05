import React from "react";
import styled from "styled-components";

import ScheduleItem from "./Item";
import Speaker from "./Speaker";

const Timeline = ({ time, speach, speakers }) => (
  <Container>
    <Time>
      <span>{time}</span>
    </Time>
    <Line />
    <ScheduleItem {...speach} />
    <Speakers>
      {speakers?.length
        ? speakers.map((speaker, index) => <Speaker key={index} {...speaker} />)
        : null}
    </Speakers>
  </Container>
);

export default Timeline;

const Container = styled.div`
  display: grid;
  grid-template-columns: 190px 1px 1.8fr 1fr;
  width: 100%;

  > div:nth-child(3) {
    padding-left: 42px;
  }
`;

const Time = styled.div`
  position: relative;
  margin-top: 8px;

  > span {
    color: #21211c;
    font-size: 2.4rem;
    font-weight: 500;
  }
`;

const Line = styled.div`
  position: relative;
  border-right: 5px solid #abba37;
  width: 1px;
  height: 100%;
  margin-top: 8px;

  &::after {
    position: absolute;
    top: 0;
    right: -16px;
    content: "";
    background: #abba37;
    width: 27px;
    height: 27px;
    border-radius: 50px;
  }
`;

const Speakers = styled.div`
  display: flex;
  flex-direction: column;

  > div:not(:last-child) {
    margin-bottom: 28px;
  }
`;
