import Head from "next/head";
import { UserAgentProvider } from "@quentin-sommer/react-useragent";
import GlobalStyle from "theme/GlobalStyle";

const App = ({ Component, pageProps, ua }) => (
  <>
    <Head>
      <title>Астрал.Digital Agro</title>
      <meta name="description" content="Астрал.Digital Agro" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://api-maps.yandex.ru/2.1/?apikey=82f26b2e-0e46-4e99-b18d-18ddf42f63e5&lang=ru_RU"
        type="text/javascript"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
      var myMap;

      // Дождёмся загрузки API и готовности DOM.
      ymaps.ready(init);
      
      function init () {
          // Создание экземпляра карты и его привязка к контейнеру с
          // заданным id ("map").
          myMap = new ymaps.Map('map', {
              // При инициализации карты обязательно нужно указать
              // её центр и коэффициент масштабирования.
              center: [54.516325, 36.241275],
              zoom: 17
          }, {
              searchControlProvider: 'yandex#search'
          });

          myMap.options.set({
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
            brightness: 0.1
          });

          myMap.controls.remove('searchControl');
          myMap.controls.remove('zoomControl');
          myMap.controls.remove('typeSelector');
          myMap.controls.remove('trafficControl');
          myMap.controls.remove('fullscreenControl');
          
          myMap.geoObjects
          .removeAll()
        .add(new ymaps.Placemark([54.516325, 36.241275], null, {
          iconLayout: 'default#image',
          iconImageHref: "img/marker.png",
          iconImageSize: [148, 98],
          iconImageOffset: [-70, -92]
        }))


      }`,
        }}
      />
    </Head>
    <GlobalStyle />
    <UserAgentProvider ua={ua}>
      <Component {...pageProps} />
    </UserAgentProvider>
  </>
);

export default App;

App.getInitialProps = async ({ ctx: { req } }) => {
  const ua = req?.headers?.["user-agent"] || navigator?.userAgent;
  return { ua };
};
