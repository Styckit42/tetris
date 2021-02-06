import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   body {
    font-size : 10px;
    font-family: futuraMedium;
    background-color: ${props => props.theme.darkColor};
    color: #fff;
    margin: 0;
  }
`;

/*const Fonts = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body {
    font-family: 'Roboto';
    font-size : 12px;
    background-color: ${props => props.theme.darkColor};
    color: #fff;
    margin: 0;
  }
`;*/

export default GlobalStyles;
