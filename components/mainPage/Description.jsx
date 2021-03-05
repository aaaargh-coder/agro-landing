import React from 'react';
import styled from 'styled-components';

const Description = () => {
  return (
    <Container>
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
  margin: 2rem 0;
  padding: 9rem 0;
  background-image: url(/img/digitalFlower.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 50%;
`

const Content = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Title = styled.h1`
  max-width: 70%;
  font-size: 4.4rem; // TODO: из-за другого шрифта
`

const Text = styled.p`
  max-width: 50%;
` 