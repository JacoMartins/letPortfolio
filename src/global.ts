import { createGlobalStyle, css } from 'styled-components';
import MontserratRegular from './assets/fonts/Montserrat-Regular.ttf';
import MontserratMedium from './assets/fonts/Montserrat-Medium.ttf';
import MontserratSemiBold from './assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf';

export const fontFaces = css`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat Medium';
    src: url(${MontserratMedium}) format('ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold}) format('ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold}) format('ttf');
    font-style: normal;
  }

`;

export const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  :root {
    --back-light: #F9F9F9;
    --back-dark: #0a0a0a;

    --purple: #8522E7;
    --yellow: #fff700;

    --purple-light: #F9F2FF;
    
    --light-green: #466A4A;
    --light-blue: #F6F8FE;
    --back-light-green: #EFF5F0;

    --dark-green: #2F8938;
    --dark-blue: #040810;
    --back-dark-green: #2F8938;

    --text-light: rgba(0, 0, 0, 0.85);
    --text-light-nav: rgba(0, 0, 0, 0.75);
    --text-light-pres: rgba(0, 0, 0, 0.65);
    --text-light-half: rgba(0, 0, 0, 0.5);

    --text-dark: rgba(255, 255, 255, 0.85);
    --text-dark-nav: rgba(255, 255, 255, 0.75);
    --text-dark-pres: rgba(255, 255, 255, 0.65);
    --text-dark-half: rgba(255, 255, 255, 0.5);

    --percentage-bar-light: rgba(0, 0 ,0, 0.08);
    --percentage-bar-dark: rgba(255, 255, 255,0.2);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    /* @media (max-width: 720px) {
      font-size: 87.5%;
    } */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: 'Montserrat', Arial, Heveltica, sans-serif, Times New Roman;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: -0.05em;
  }

  body {
    background: var(--back-dark);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  hr {
    border: solid 1px rgba(255, 255, 255, 0.2);
    margin-bottom: 2rem;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--back-dark);
    padding: 0.125rem;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.20);
    border-radius: 3px;
    width: 2px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;