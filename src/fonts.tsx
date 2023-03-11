import { createGlobalStyle } from "styled-components";
import Regular from "./assets/fonts/Rubik-Regular.ttf";
import Medium from "./assets/fonts/Rubik-Medium.ttf";
export const FontStyle = createGlobalStyle`

@font-face {
  font-family: 'Rubik';
  src: url(${Regular}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'RubikBold';
  src: url(${Medium}) format('truetype');
  font-weight: bold;
  font-style: bold;
}

body {
  font-family: "Rubik";
}
`;
