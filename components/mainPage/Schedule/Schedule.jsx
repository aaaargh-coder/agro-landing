import React from "react";
import styled from "styled-components";

import { WarningBanner } from "components/common";
import Timeline from "./Timeline";

const WARNING_TEXT =
  "В программе возможны изменения, актуальная программа будет выслана на указанный при регистрации e-mail";

const SCHEDULE = [
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Регистрация участников семинара",
      description: null,
      icon: "img/book.png",
      iconTop: -36,
      iconRight: -140,
    },
    speakers: null,
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Цифровое сельское хозяйство",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Государственная поддержка СХТП",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Дистанционное обучение в АПК",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Цифровизация Томской области",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Использование систем телеметрии",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Кофе-брейк",
      description: null,
      icon: "img/coffee.png",
      iconTop: -28,
      iconRight: -90,
    },
    speakers: null,
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Беспилотники в сельском хозяйстве",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Цифровизация в агрохолдингах",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Роботизация в молочном животноводстве",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Дрон как инструмент агронома",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "09:00 - 10:00",
    speach: {
      title: "Опрыскивание дронами",
      description:
        "Исполнение ведомственного проекта «‎‎Цифровое сельское хозяйство» и тенденции развития в области",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Геннадий Луценко",
        position:
          "Зам. министра - начальник управления по развитию растениеводства и земельных отношений с/х Калужской области",
      },
    ],
  },
  {
    time: "14:40 - 15:10",
    speach: {
      title: "Опыт внедрения новых с/х культур",
      description: "Дефицит источников цельного белка в сельском хозяйстве",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Всеволод Грувман",
        position: "Компания Биовольф",
      },
      {
        photo: null,
        name: "Илья Параушкин",
        position: "Компания Биовольф",
      },
    ],
  },
  {
    time: "15:10 - 16:40",
    speach: {
      beforeTitle: "Круглый стол",
      title: "Цифровые сервисы в агропромышленном комплексе",
      description: null,
      icon: "img/microphone.png",
      iconTop: -15,
      iconRight: -56,
    },
    speakers: null,
  },
];

const Schedule = () => (
  <Container>
    <section>
      <h1>Программа</h1>
      <WarningBanner text={WARNING_TEXT} />
      <TimelineWrapper>
        {SCHEDULE.map((props, index) => (
          <Timeline key={index} {...props} />
        ))}
      </TimelineWrapper>

      <WarningBanner text={WARNING_TEXT} />
    </section>
  </Container>
);

export default Schedule;

const Container = styled.div`
  padding: 120px 0 35px 0;
  background-image: url("img/drone.png");
  background-repeat: no-repeat;
  background-position: 100% 46%;

  > section {
    display: flex;
    flex-direction: column;
  }
`;

const TimelineWrapper = styled.div`
  display: grid;
  padding: 92px 0;

  > div {
    &:last-child {
      > div:nth-child(2) {
        border: none;
      }
    }

    > div:nth-child(3) {
      padding-bottom: 100px;
    }
  }
`;
