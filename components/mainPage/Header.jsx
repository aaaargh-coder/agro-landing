import React from 'react';
import styled from "styled-components";
import AstralLogoIcon from 'icons/AstralLogoIcon.svg';
import CalendarIcon from 'icons/CalendarIcon.svg';
import GeolocationIcon from 'icons/GeolocationIcon.svg';
import { Button } from 'components/common';
import { ParallaxBanner } from 'react-scroll-parallax';

const Header = () => {
  return (
    <StyledParallaxBanner
      layers={[
        {
          image: '/img/header.png',
          amount: 0.3,
          props: {
            style: {
              zIndex: -1,
              marginTop: '20%',
              maxHeight: '100%',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }
          }
        },
        {
          image: '/img/copter.png',
          amount: 0.5,
          props: {
            className: 'headerDrone',
            style: {
              zIndex: -1,
              left: 'auto',
              right: '1%',
              top: '0',
              width: '40%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top right',
              backgroundSize: 'contain',
            }
          },
        },
      ]}
      style={{
        height: '600px',
      }}
    >
      <section css={` position: relative; z-index: 1; `}>
        <Top>
          <AstralLogoIcon />

          <Contacts>
            <span>
              agrodigital@astral.ru
            </span>
            <span>
              +7 (962) 174-49-99
            </span>
          </Contacts>
        </Top>

        <Info>
          <Description>Офлайн & Онлайн <span>Конференция</span></Description>

          <Title>Цифровые сервисы в АПК</Title>
          <Instruction>Инструкция по применению </Instruction>

          <Time><CalendarIcon /><b><span>24 марта 2021</span></b> <span>10:00 – 15:00</span></Time>
          <Addres><GeolocationIcon /><span>Калуга, Циолковского д. 4</span></Addres>

          <ButtonsGroup>
            <a href='#registration'>
              <Button>
                Зарегистрироваться
              </Button>
            </a>
            <a href='#schedule'>
              <Button>
                Программа
              </Button>
            </a>
          </ButtonsGroup>
        </Info>
      </section>
    </StyledParallaxBanner>
  );
};

export default Header;

const StyledParallaxBanner = styled(ParallaxBanner)`
  padding-top: 5rem;
  padding-bottom: 15%;

  @media (max-width: 700px) {
    & .headerDrone {
      top: 10% !important;
    }
  }
`

const Contacts = styled.div`
  display: flex;
  gap: 4rem;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;

    > ${Contacts} {
      margin-top: 2rem;
      flex-direction: column;
      gap: 1rem;
    }
  }
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
  
  > span:last-child {
    margin-left: 1rem;
  }
`

const Addres = styled(Row)`
  margin-top: 2rem;
`

const ButtonsGroup = styled.div`
  margin-top: 8rem;
  display: flex;
  gap: 1.2rem;

  > a:first-child > button {
    background-color: var(--yellow);
    color: #312E2E;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    > a:first-child > button {
      margin-bottom: 1.2rem;
    }
  }
`