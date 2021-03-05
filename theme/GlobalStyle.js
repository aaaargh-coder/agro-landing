import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(158, 158, 158, 0.43);
    border-radius: 15px;
  }
  
  html {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;

    @media(max-width: 768px) {
      font-size: 9px;
    }

    @media(max-width: 425px) {
      font-size: 8px;
    }
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 2rem; 
    color: #393E34;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;

    --green: #439F41;
    --yellow: #FDB700;
  }
  
  #__next {
    overflow: hidden;
  }

  section {
    margin: 0 auto;
    max-width: min(1130px, 90%);
  }

  span {
    color: #fff;
    font-size: 2rem;
    line-height: 115%;
  }

  p {
    margin: 0;
    font-size: 2rem;
    line-height: 115%;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 5rem;
    font-size: 5rem;
    line-height: 115%;
    letter-spacing: -0.03em;
    color: #21211C;
    font-weight: 400;
  }

  h2 {
    font-size: 3rem;
    line-height: 110%;
    color: #21211C;
    letter-spacing: -0.03em;
  }

  button {
    // Дважды паддинг
    padding: 24px 32px;
    background: inherit;
    border: 1px var(--yellow) solid;
    color: var(--yellow);
    border-radius: 3.8rem;
    font-family: Roboto;
    font-weight: bold;
    font-size: 2rem;
    line-height: 140%;
    text-align: center;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-size: 1.8rem;
    line-height: 115%;
  }
`;
