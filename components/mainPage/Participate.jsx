import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/common'
import AstralLogoIcon from 'icons/AstralLogoIcon.svg'
import ZoomLogoIcon from 'icons/ZoomLogoIcon.svg'
import LaptopIcon from 'icons/LaptopIcon.svg'
import GeolocationIcon from 'icons/GeolocationIcon.svg'
import ArrowRight from 'icons/ArrowRight.svg'

const CARDS = [
  {
    bgImage: '/img/onlineRegisterBg.png',
    Logo: ZoomLogoIcon,
    title: <><LaptopIcon /> Online</>,
    date: '24 марта',
    time: '10:00-15:00 МСК',
    description: 'Онлайн-трансляция в Zoom, предварительная регистрация обязательна',
  },
  {
    bgImage: '/img/offlineRegisterBg.png',
    Logo: AstralLogoIcon,
    title: <><GeolocationIcon /> В Калуге</>,
    date: '24 марта',
    time: '10:00-15:00 МСК',
    description: 'Место проведения: Калуга, Циолковского 4, конференц-зал ИТ-центра «Калуга Астрал»',
  },
]

const Participate = () => {
  return (
    <Container>
      <section>
        <Header>Как принять участие</Header>
        <Cards>
          {
            CARDS.map(({
              bgImage,
              Logo,
              title,
              date,
              time,
              description,
            }) => (
              <Card key={description} style={{ backgroundImage: `url(${bgImage})` }}>
                <CardContent>
                  <Row>
                    <Title>{title}</Title>
                    <LogoWrapper><Logo /></LogoWrapper>
                  </Row>

                  <Date>{date}</Date>
                  <Time>{time}</Time>

                  <Description>
                    {description}
                  </Description>

                  <a href='#registration' css={` margin-top: auto; `}>
                    <StyledButton>
                      Регистрация <ArrowRight />
                    </StyledButton>
                  </a>
                </CardContent>
              </Card>
            ))
          }
        </Cards>
      </section>
    </Container>
  );
};

export default Participate;

const Container = styled.div`
  padding-top: 9rem;
  padding-bottom: 18rem;
  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #F1F1F1 100%);
`

const Header = styled.h1`
  margin-left: 2.2rem;
`

const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`

const Card = styled.div`
  position: relative;
  min-height: 360px;
  width: 532px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white; 

  ::after {
    content: '';
    display: block;
    margin-top: 94%;
  }
`

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 6rem 4rem 6.6rem 6rem;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  font-weight: bold;

  svg {
    margin-right: 0.8rem;
  }
`

const LogoWrapper = styled.div`
  @media (max-width: 400px) {
    > svg {
      transform: scale(0.75);
    }
  }
`

const Date = styled.div`
  margin-top: 3.2rem;
  font-size: 3.2rem;
  font-weight: bold;
`

const Time = styled.p`
  margin-top: 1rem;
  font-size: 2.4rem;
`

const Description = styled.p`
  margin-top: 3rem;
  margin-bottom: 1.6rem;
`

const StyledButton = styled(Button)`
  align-self: flex-start;
  background-color: var(--yellow);
  color: #312E2E;
  display: flex;
  align-items: center;

  > svg {
    margin-left: 1rem;
  }
`