import React, { useState } from "react";
import styled from "styled-components";

import { Input, Select, Button } from "components/common";

const OPTIONS = ["Первый тип", "Второй тип", "Третий тип"];

const INITIAL_SELECT = {
  value: null,
  expanded: false,
};

const Registration = () => {
  const [form, setForm] = useState({});
  const [place, setPlace] = useState(null);
  const [select, setSelect] = useState(INITIAL_SELECT);

  const setOnlinePlace = (e) => {
    e.preventDefault();
    setPlace(1);
  };
  const setKalugaPlace = (e) => {
    e.preventDefault();
    setPlace(2);
  };

  const toggleExpanded = (e) => {
    e.preventDefault();
    setSelect({ ...select, expanded: !select.expanded });
  };

  const setSelectValue = (value) => setSelect({ ...select, value });

  return (
    <Container>
      <h1>Регистрация</h1>
      <div>
        <div>
          <p>
            Регистрируйся и принимай участие в самом крупном агропромышленном
            мероприятии региона!
          </p>
          <Image />
        </div>
        <Form>
          <form>
            <Input name="name" placeholder="Имя" />
            <div>
              <Input name="email" type="email" placeholder="E-mail" />
              <Input name="phone" type="tel" placeholder="Телефон" />
            </div>
            <div>
              <Button
                green
                outlined
                radio
                selected={place === 1}
                onClick={setOnlinePlace}
              >
                Online
              </Button>
              <Button
                green
                outlined
                radio
                selected={place === 2}
                onClick={setKalugaPlace}
              >
                В Калуге
              </Button>
            </div>
            <Select
              placeholder="Выберите тип организации"
              options={OPTIONS}
              value={select.value}
              expanded={select.expanded}
              onClick={toggleExpanded}
              onSelect={setSelectValue}
            />
            <Input name="comment" placeholder="Комментарий" />
            <Button green onClick={(e) => e.preventDefault()}>
              Отправить
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default Registration;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1076px;

  > div {
    display: flex;
    justify-content: center;

    > div {
      z-index: 1;

      > p {
        color: #393e34;
      }
    }
  }
`;

const Form = styled.div`
  max-width: 492px;
  width: 100%;
  z-index: 2;

  > form {
    display: flex;
    flex-direction: column;

    > *:not(:last-child) {
      margin-bottom: 24px;
    }

    > div {
      display: flex;
      justify-content: space-between;

      > button,
      input {
        width: 100%;

        &:first-child {
          margin-right: 10px;
        }

        &:last-child {
          margin-left: 10px;
        }
      }
    }

    button {
      height: 76px;
    }
  }
`;

const Image = styled.div`
  background-image: url("img/register.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 463px;
  margin: 122px 0 0 -60px;
  transform: scale(1.2);
`;
