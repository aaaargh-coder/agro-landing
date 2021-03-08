import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'components/common'

const Hackathon = () => {
  return (
    <Container>
      <section>
        <Content>
          <h1>АгроХакатон</h1>
          <p>
            По итогам конференции для решения выявленных задач состоится АгроХакатон.
        </p>

          <Image src="/img/hackathon.png" alt='IT specialist' />

          <p css={` margin-top: 2.8rem; `}>
            Команды IT-специалистов в течение нескольких дней разработают цифровые сервисы для решения конкретных задач. Лучшие команды получат возможность запустить пилотные проекты, возможно именно в вашем хозяйстве!
          </p>
          <p css={` margin-top: 6rem; `}>
            <b>
              Подпишитесь на новостную рассылку хакатона,чтобы быть в курсе событий.
            </b>
          </p>

          <Group>
            <TextField placeholder='Email' />
            <StyledButton>Подписаться</StyledButton>
          </Group>
        </Content>
      </section>
    </Container>
  );
};

export default Hackathon;

const Container = styled.div`
  position: relative;
  padding: 10rem 0;
  background-color: #E1E1E1;
  //background-image: ;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: left center;
`

const Image = styled.img`
  position: absolute; 
  left: 0;
  top: 50%; 
  transform: translateY(-50%);
  max-width: 45%;
  margin-right: 10%;
`

const Content = styled.div`
  margin-left: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 700px) {
    max-width: 90%;
    margin: auto;
    align-items: center;
    
    > ${Image} {
      margin-top: 2rem;
      position: static;
      max-width: 80%;
      transform: none;
    }
  }
`

const Group = styled.div`
  margin-top: 2.8rem;
`

const TextField = styled(Input)`
  width: 32rem;
  margin-right: 2.8rem;
  background-color: white;

  @media (max-width: 480px) {
      height: 48px;
    }
`

const StyledButton = styled(Button)`
  background-color: var(--green);
  border-color: var(--green);
  color: white;

  @media (max-width: 1224px) {
    margin-top: 1.2rem !important;
  }
`