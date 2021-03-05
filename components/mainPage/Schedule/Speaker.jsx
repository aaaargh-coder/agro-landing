import React from "react";
import styled from "styled-components";

const Speaker = ({ name, position, icon }) => (
  <Container>
    {name && position ? (
      <>
        <Photo>{icon || ""}</Photo>
        <div>
          <span>{name}</span>
          <span>{position}</span>
        </div>
      </>
    ) : null}
  </Container>
);

export default Speaker;

const Container = styled.div`
  display: flex;
  max-width: 380px;

  > div {
    display: flex;
    flex-direction: column;
    max-width: 280px;

    > span {
      &:first-child {
        font-weight: bold;
        font-size: 2rem;
        line-height: 140%;
        color: #21211c;
        margin-bottom: 4px;
      }

      &:last-child {
        color: #393e34;
        line-height: 140%;
        font-size: 1.4rem;
      }
    }
  }
`;

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: aliceblue;
  margin-right: 20px;
`;
