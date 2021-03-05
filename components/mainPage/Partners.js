import React from 'react';
import styled from 'styled-components'

const PARTNERS = [
  {
    bgImage: '/img/AgricultureMinistry.png',
    name: <b>МИНИСТЕРСТВО СЕЛЬСКОГО <br /> ХОЗЯЙСТВА КАЛУЖСКОЙ ОБЛАСТИ</b>
  },
  {
    bgImage: '/img/KalugaIPK.png',
    name: <>ФГБОУ ДПО <br /><b>КАЛУЖСКИЙ ИПК</b></>
  },
  {
    bgImage: '/img/ICTCluster.png',
    name: <><b>ИКТ КЛАСТЕР</b><br />КАЛУЖСКОЙ ОБЛАСТИ</>
  },
  {
    bgImage: '/img/MyBusiness.png',
  },
  {
    bgImage: '/img/BusinessDevelopmentAgency.png',
  },
  {
    bgImage: '/img/airmetric.png',
  },
  {
    bgImage: '/img/GDGKaluga.png',
  },
]

const Partners = () => {
  return (
    <Container>
      <Title> Наши партнеры</Title>
      <Content>
        {
          PARTNERS.map(({ bgImage, name }) => (
            <Partner>
              <img src={bgImage} alt="Partner icon" />
              <p>{name}</p>
            </Partner>
          ))
        }
      </Content>
    </Container>
  );
};

export default Partners;

const Container = styled.div`
  margin-bottom: 10rem;
  padding-bottom: 11rem;
  border-bottom: 3px solid #f2f2f2;
`

const Title = styled.h1`
  margin: 6rem 0 7rem 0;
  text-align: center;
  font-size: 4rem;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: min(900px, 90%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`

const Partner = styled.div`
  display: flex;
  align-items: center;

  > img {
    margin-right: 1.4rem;
  }

  > p {
    font-size: 1.3rem;
  }
`