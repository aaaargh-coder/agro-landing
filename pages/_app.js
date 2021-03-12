import Head from "next/head";
import GlobalStyle from "theme/GlobalStyle";
import { ParallaxProvider } from 'react-scroll-parallax';

const App = ({ Component, pageProps }) => (
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
    </Head>
    <GlobalStyle />
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  </>
);

export default App;
