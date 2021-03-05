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
  padding: 10rem 0;
  background-color    : #E1E1E1;
  background-image: url(/img/hackathon.png);
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: left center;
`

const Content = styled.div`
  margin-left: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Group = styled.div`
  align-self: flex-start;
  margin-top: 2.8rem;
`

const TextField = styled(Input)`
  width: 32rem;
  margin-right: 2.8rem;
  background-color: white;
`

const StyledButton = styled(Button)`
  background-color: var(--green);
  border-color: var(--green);
  color: white;
`