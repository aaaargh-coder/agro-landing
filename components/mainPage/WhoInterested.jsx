import React from 'react';
import styled from 'styled-components';

const INTERESTED_GROUPS = [
  {
    titleBackground: '#ABBA37',
    title: 'Представители агропромышленного комплекса',
    points: [
      '- Расскажем об инновационных технологиях для АПК',
      '- Поможем получить гос.поддержку и финансирование на запуск проектов',
      '- Покажем успешные экономически эффективные кейсы'
    ],
    backgroundURL: '/img/harvester.png'
  },
  {
    titleBackground: '#FDB700',
    title: 'Представители ИТ-компанийи интеграторы',
    points: [
      '- Поможем наладить контакт с отраслью для внедрения решений',
      '- Сформируем пул актуальных задач для агропромышленного комплекса',
    ],
    backgroundURL: '/img/skyscraper.png'
  },
  {
    titleBackground: '#3AB8FF',
    title: 'Представители Министерства СХ и профильных ведомств',
    points: [
      '- Сформируем запрос отраслина поддержку цифровой трансформации сельского хозяйства, определим ключевые векторы',
    ],
    backgroundURL: '/img/blazon.png'
  },
]

const WhoInterested = () => {
  return (
    <Container>
      <section>
        <Title>
          Кому будет интересно
        </Title>

        <Cards>
          {
            INTERESTED_GROUPS.map(({ titleBackground, title, points, backgroundURL }) => (
              <Card>
                <Header style={{ backgroundColor: titleBackground }}>
                  {title}
                </Header>
                <Content style={{ backgroundImage: `url(${backgroundURL})` }}>
                  <ul>
                    {points.map(text => <Point>{text}</Point>)}
                  </ul>
                </Content>
              </Card>
            ))
          }
        </Cards>
      </section>
    </Container>
  );
};

export default WhoInterested;

const Container = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgba(196, 196, 196, 0.14); // TODO
`

const Title = styled.h1`
  margin-left: 4rem;
` 

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
`

const Card = styled.div`
  max-width: 350px;
  box-shadow: 0px 21px 46px 2px rgba(0, 0, 0, 0.06);
`

const Header = styled.div`
  height: 8.4rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`

const Content = styled.div`
  min-height: 408px;
  padding: 2.5rem 2rem 0 3rem;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 50%;
`

const Point = styled.li`
  margin-bottom: 1.2rem;
`