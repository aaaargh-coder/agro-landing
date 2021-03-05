import React from 'react';
import styled from 'styled-components';
import BacteriumIcon from 'icons/BacteriumIcon.svg'
import PlantIcon from 'icons/PlantIcon.svg'
import ChatIcon from 'icons/ChatIcon.svg'
import ElectronicBoardIcon from 'icons/ElectronicBoardIcon.svg'
import CupIcon from 'icons/CupIcon.svg'

const TOPICS = [
  {
    Icon: BacteriumIcon,
    text: <p>Обсудим <b>современные цифровые технологии</b> и то, как они применяются в сельском хозяйстве</p>
  },
  {
    Icon: PlantIcon,
    text: <p>Расскажем о <b>реальном опыте</b>применения цифровых решенийи их экономической эффективности</p>
  },
  {
    Icon: ChatIcon,
    text: <p>Время для <b>нетворкинга</b> c представителями АПК, IT- компаний и профильных ведомств</p>
  },
  {
    Icon: ElectronicBoardIcon,
    text: <p>В рамках круглого стола ответим на вопросы об использовании новейших технологий: <b>искусственного интеллекта, дронов и роботов, интернета вещей</b></p>
  },
  {
    Icon: CupIcon,
    text: <p>Совместно сформируем пул актуальных задач для решения на <b>АгроХакатоне</b></p>
  },
]

const AboutСonference = () => {
  return (
    <Container>
      <section>
        <Title>Что будет на конференции</Title>
        <Topics>
          {
            TOPICS.map(({ Icon, text }) => (
              <Topic>
                <Icon />
                {text}
              </Topic>
            ))
          }
        </Topics>
      </section>
    </Container>
  );
};

export default AboutСonference;

const Container = styled.div`
  padding-top: 10rem;
  padding-bottom: 28rem; 
  background-image: url(/img/aboutСonferenceBg.png);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
`

const Title = styled.h1`
  margin-left: 4rem;
`

const Topics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 9.6rem 5rem;
`

const Topic = styled.div`
  > svg {
    margin-bottom: 2rem;
    height: 48px;
    width: 48px;
  }
`