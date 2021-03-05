import React from "react";
import styled from "styled-components";

import { Button } from "components/common";

import Logo from "icons/AstralLogoIcon.svg";
import Mail from "icons/MessageIcon.svg";
import Phone from "icons/PhoneIcon.svg";

const Footer = () => (
  <Container>
    <section>
      <div>
        <Section>
          <Title>Контакты</Title>
          <Text>Александр Вишневский</Text>
          <Links>
            <span>
              <Mail />
              <a href="mailto:agrodigital@astral.ru">agrodigital@astral.ru</a>
            </span>
            <span>
              <Phone />
              <a href="tel:+79621744999">+7 (962) 174-49-99</a>
            </span>
          </Links>
        </Section>
        <Section>
          <Title>Место проведения</Title>
          <Text>г. Калуга, ул. Циолковского, д. 4,</Text>
          <Text>конференц-зал ИТ-центра «Калуга Астрал»</Text>
        </Section>
        <Section>
          <Title>Остались вопросы?</Title>
          <Button green>Задать вопрос</Button>
        </Section>
      </div>
      <div>
        <Logo />
      </div>
    </section>
  </Container>
);

export default Footer;

const Container = styled.div`
  background: #393e34;
  padding: 50px 0;

  > section {
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      &:first-child > div:last-child {
        align-items: center;
      }

      &:last-child {
        margin-top: 56px;
        opacity: 0.5;
      }
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    font-size: 1.4rem;
    max-width: 180px;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 2rem;
  line-height: 115%;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
`;

const Text = styled.span`
  font-size: 1.4rem;
  line-height: 115%;
  letter-spacing: -0.03em;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 10px;
`;

const Links = styled(Text)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  opacity: 1;

  > span {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-right: 22px;

    > svg {
      margin-right: 8px;
    }

    > a {
      color: #ffffff;
      font-size: 1.4rem;
      text-decoration: none;
      opacity: 0.5;
    }

    &:hover > a {
      opacity: 1;
    }
  }
`;
