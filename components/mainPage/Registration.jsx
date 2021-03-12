import React, { useState } from "react";
import styled from "styled-components";

import { Input, Select, Button } from "components/common";

const ORGANIZATION_TYPES = [
  "Предприятие АПК",
  "Разработчик ПО",
  "Производитель оборудования",
  "другое",
];

const INITIAL_SELECT = {
  value: ORGANIZATION_TYPES[0],
  expanded: false,
};

const FORM_FIELDS = {
  name: {
    name: 'name',
    placeholder: 'Имя',
    required: true
  },
  email: {
    name: 'email',
    type: 'email',
    placeholder: 'E-mail',
    required: true
  },
  phone: {
    name: 'phone',
    type: 'tel',
    placeholder: 'Телефон',
    required: true
  },
  comment: {
    name: 'comment',
    placeholder: 'Комментарий',
    required: false
  },
}

const PARTICIPATION_TYPE = [
  'Офлайн',
  'Онлайн',
]

const Registration = () => {
  const [place, setPlace] = useState(1);
  const [select, setSelect] = useState(INITIAL_SELECT);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleFormSubmit = (e) => {
    setErrorMessage('')
    e.preventDefault()

    const form = e.currentTarget

    const body = {}
    let isError = false

    Object.values(FORM_FIELDS).forEach(({ name, placeholder, required }) => {
      const value = form[name].value

      if (required && !value) {
        isError = true
        setErrorMessage(`Пожалуйста, заполните поле "${placeholder}"`)
      }
        
      body[name] = value
    })

    if (isError) return

    body.participationType = place === 2 ? PARTICIPATION_TYPE[0] : PARTICIPATION_TYPE[1]
    body.organizationType = select.value

    const res = fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify(body)
    })

    console.log(111, res)
  }

  return (
    <a name='registration'>
      <Container>
        <h1>Регистрация</h1>
        <div>
          <p css={` grid-area: text; `}>
            Регистрируйся и принимай участие в самом крупном агропромышленном
            мероприятии региона!
          </p>
          <Image />
          <Form>
            <form onSubmit={handleFormSubmit}>
              <Input {...FORM_FIELDS.name} />
              <div>
                <Input {...FORM_FIELDS.email} />
                <Input {...FORM_FIELDS.phone} />
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
                options={ORGANIZATION_TYPES}
                value={select.value}
                expanded={select.expanded}
                onClick={toggleExpanded}
                onSelect={setSelectValue}
              />
              <Input {...FORM_FIELDS.comment} />
              <Button green type='submit'>
                Отправить
              </Button>
            </form>
            <ErrorMessage>
              {errorMessage}
            </ErrorMessage>
          </Form>
        </div>
      </Container>
    </a>
  );
};

export default Registration;

const Image = styled.div`
  grid-area: img;
  background-image: url("img/register.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 100%;
  width: 100%;
  margin: 8rem 0 0 -60px;
  transform: scale(1.2);
`;

const Container = styled.section`
  padding: 0 2rem 15rem;
  display: flex;
  flex-direction: column;
  max-width: 1076px;

  @media (max-width: 800px) {
    padding-bottom: 8rem;

    > h1 {
      text-align: center;
    }
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas:
      "text form"
      "img form"
    ;

    > div {
      z-index: 1;

      > p {
        color: #393e34;
      }
    }

    @media (max-width: 800px) {
      grid-template-areas:
        "text"
        "form"
        "img"
      ;
      grid-template-rows: 100px 1fr 240px;
      justify-items: center;
      grid-template-columns: 1fr;
      text-align: center;

      ${Image} {
        margin: 0;
        margin-top: 40px;
      }
    }
  }
`;

const Form = styled.div`
  max-width: 492px;
  width: 100%;
  z-index: 2;
  grid-area: form;

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

const ErrorMessage = styled.div`
  margin-top: 1rem;
  min-width: 4rem;
  height: 2.8rem;
  color: #ff0055;
`
