import React from 'react';
import styled from "styled-components";
import AstralLogoIcon from 'icons/AstralLogoIcon.svg';
import CalendarIcon from 'icons/CalendarIcon.svg';
import GeolocationIcon from 'icons/GeolocationIcon.svg';
import { Button } from 'components/common';

const Header = () => {
  return (
    <Container>
      <section>
        <Сontacts>
          <AstralLogoIcon />

          <div>
            <span>
              agrodigital@astral.ru
            </span>
            <span css={` margin-left: 4rem; `}>
              +7 (962) 174-49-99
            </span>
          </div>
        </Сontacts>

        <Info>
          <Description>Офлайн & Онлайн <span>Конференция</span></Description>

          <Title>Цифровые сервисы в АПК</Title>
          <Instruction>Инструкция по применению </Instruction>

          <Time><CalendarIcon /><b><span>18 марта 2021</span></b> <span>10:00 – 15:00</span></Time> {/* TODO: иконка */}
          <Addres><GeolocationIcon /><span>Калуга, Циолковского д. 4</span></Addres> {/* TODO: иконка */}

          <ButtonsGroup>
            <Button>
              Зарегистрироваться
            </Button>
            <Button>
              Программа
            </Button>
          </ButtonsGroup>
        </Info>
      </section>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding-top: 5rem;
  padding-bottom: 15%;
  background-image: url(/img/header.png); // TODO: header
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const Сontacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Info = styled.div`
  margin-top: 7rem;
  font-size: 2.5rem;
`

const Description = styled.div`
  color: var(--yellow);

  > span {
    font-size: 2.5rem;
  }
`

const Title = styled.div`
  margin-top: 3.6rem;
  font-size: 5rem;
  color: var(--yellow);
  font-weight: 800;
`

const Instruction = styled.div`
  font-size: 5rem;
  color: white;
`

const Row = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 1.2rem;
  }

  span {
    font-size: 2.5rem;
  }
`

const Time = styled(Row)`
  margin-top: 5.5rem;
`

const Addres = styled(Row)`
  margin-top: 2rem;
`

const ButtonsGroup = styled.div`
  margin-top: 8rem;

  > button:first-child {
    margin-right: 1.2rem;
    background-color: var(--yellow);
    color: #312E2E;
  }
`