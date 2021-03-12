import React from "react";
import styled from "styled-components";
import { Parallax } from 'react-scroll-parallax';

import { WarningBanner } from "components/common";
import Timeline from "./Timeline";

const WARNING_TEXT =
  "В программе возможны изменения, актуальная программа будет выслана на указанный при регистрации e-mail";

const SCHEDULE = [
  {
    time: "09:00 – 10:00",
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
    time: "10:00 – 10:15",
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
    time: "10:15 – 10:30",
    speach: {
      title: "Государственная поддержка СХТП",
      description:
        "О мерах государственной поддержки СХТП в рамках цифровизации отрасли. Обзор профинансированных проектов",
    },
    speakers: [
      {
        photo: null,
        name: "Николай Тубеншляк",
        position:
          "Заместитель руководителя, Агентство развития бизнеса Калужской области",
      },
    ],
  },
  {
    time: "10:30 – 10:45",
    speach: {
      title: "Дистанционное обучение в АПК",
      description:
        "Механизмы дистанционного обучения, применяемые в Калужской области для АПК",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Марина Бункова",
        position:
          "Кан. с/х н., зав. кафедрой   профессиональной переподготовки ФГБОУ ДПО «Калужский ИПК»",
      },
    ],
  },
  {
    time: "10:45 – 11:40",
    speach: {
      title: "Цифровизация Томской области",
      description:
        "Опыт цифровизации АПК Томской области. Онлайн",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Дмитрий Билле",
        position:
          "Начальник отделапо информационно–аналитическому обеспечению Департамента по социально-экономическому развитию села Томской области",
      },
    ],
  },
  {
    time: "11:40 – 12:00",
    speach: {
      title: "Использование систем телеметрии",
      description:
        "Эффективность использования систем телеметрии техники на примере внедрения в ГП «Калужская МТС»",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Дмитрий Самойлов",
        position:
          "ООО “Омникомм системс”",
      },
    ],
  },
  {
    time: "12:00 – 12:30",
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
    time: "12:30 – 12:50",
    speach: {
      title: "Беспилотники в сельском хозяйстве",
      description:
        "О применении дронов в сельском хозяйстве.Концепция проекта «Умный сад»",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Александр Алёхин",
        position:
          "Генеральный директор ООО «Дистанционные измеренияи геоинформатика» (АирМетрик)",
      },
    ],
  },
  {
    time: "12:50 – 13:20",
    speach: {
      title: "Цифровизация в агрохолдингах",
      description:
        "Об опыте применения цифровых инструментов в рамках агрохолдинга.",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Александр",
        position:
          "Руководитель ИТ-департамента ООО «Агрохолдинг Весна»",
      },
    ],
  },
  {
    time: "13:20 – 13:50",
    speach: {
      title: "Роботизация в молочном животноводстве",
      description:
        "Об эффективности роботизации молочного животноводства.",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Николай Дубина",
        position:
          "Генеральный директор ООО “Фермы Ясногорья”",
      },
    ],
  },
  {
    time: "13:50 – 13:20",
    speach: {
      title: "Дрон как инструмент агронома",
      description:
        "Цифровые системы управления сельхозпроизводством.",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Максим Кондратьев",
        position:
          "ООО «Центр беспилотной авиации»",
      },
    ],
  },
  {
    time: "14:20 – 14:40",
    speach: {
      title: "Опрыскивание дронами",
      description:
        "Применение дронов при ультрамалообьёмном опрыскивании",
      icon: null,
    },
    speakers: [
      {
        photo: null,
        name: "Михаил Гулов",
        position:
          "Руководитель филиалаФГБУ Россельхозцентр Калужской области",
      },
    ],
  },
  {
    time: "14:40 – 15:10",
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
    time: "15:10 – 16:40",
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
  <a name='schedule'>
    <Container>
      <StyledParallax
        y={[200, -200]}
      >
        <DroneImageWrapper>
          <img src='img/drone.png' alt='Drone' />
        </DroneImageWrapper>
      </StyledParallax>
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
  </a>
);

export default Schedule;

const Container = styled.div`
  position: relative;
  padding: 120px 0 35px 0;

  > section {
    display: flex;
    flex-direction: column;
  }
`;

const StyledParallax = styled(Parallax)`
  position: absolute;
  z-index: 10;
  top: 42%;
  left: auto;
  right: -1%;

  @media (max-width: 1140px) {
    transform: scale(0.5);
  }
  @media (max-width: 1000px) {
    left: -220px;
    right: auto;
    transform: scale(0.2);
  }
`

const DroneImageWrapper = styled.div`  
  display: flex;
  justify-content: flex-end;
`

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

  @media (max-width: 600px) {
    padding: 0;
  }
`;
