import React from "react";
import styled from "styled-components";

const ScheduleItem = ({
  beforeTitle,
  title,
  description,
  icon,
  iconTop,
  iconRight,
}) => (
  <Container before={beforeTitle} top={iconTop} right={iconRight}>
    <div>
      <div>
        <span>{title}</span>
        {typeof icon === "string" ? (
          <img src={icon} alt="Shedule item icon" />
        ) : (
          icon
        )}
      </div>
      <span>{description}</span>
    </div>
  </Container>
);

export default ScheduleItem;

const Container = styled.div`
  display: flex;
  max-width: 640px;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
    max-width: 528px;

    > div {
      display: flex;
      position: relative;

      > img {
        position: absolute;
        top: ${({ top }) => `${top}px`};
        right: ${({ right }) => `${right}px`};
      }

      > span {
        position: relative;
        font-weight: bold;
        font-size: 3rem;
        line-height: 140%;
        color: #21211c;
        margin-bottom: 12px;

        ::before {
          position: absolute;
          content: "${({ before }) => before}";
          top: -42px;
          left: 0;
          font-size: 2rem;
          font-weight: 400;
          color: #393e34;
        }
      }
    }

    > span {
      color: #393e34;
      line-height: 140%;
      font-weight: 300;
    }
  }
`;
