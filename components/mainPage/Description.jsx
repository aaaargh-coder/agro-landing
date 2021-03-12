import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

const Description = () => {
  return (
    <Container>
      <Parallax
        x={[-25, 0]}
      >
        <ImgWrapper>
          <img src='/img/digitalFlower.png' alt='Digital flower' />
        </ImgWrapper>
      </Parallax>
      <section>
        <Content>
          <Title>
            Первая Digital Agro конференция Калужской области
          </Title>
          <Text>
            Объединяем аграриев, IT-компании и отраслевые ведомства для развития цифровых технологий в РФ. Создаем единое информационное пространство для общения, обмена опытом и создания новых технологических решений.
          </Text>
        </Content>
      </section>
    </Container>
  );
};

export default Description;

const Container = styled.div`
  position: relative;
  margin: 2rem 0;
  padding: 9rem 0;
`

const ImgWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  max-width: 40%;

  > img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1100px) {
    margin-top: 12rem;
  }
  @media (max-width: 400px) {
    margin-top: 17rem;
  }
`

const Title = styled.h1`
  max-width: 70%;
  font-size: 4.4rem;
`

const Text = styled.p`
  max-width: 50%;
`

const Content = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: 600px) {
    ${Text} {
      margin-top: 20%;
      max-width: 100%;
    }
    ${Title} {
      max-width: 100%;
    }
  }
`