import { createGlobalStyle } from "styled-components";

import SourceSansPro from "../assets/fonts/SourceSansPro.ttf";
import DancingScript from "../assets/fonts/DancingScript.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-weight: 400;
      font-family: 'Dancing Script', cursive;
      src: url(${DancingScript}) format("truetype");
    }

    @font-face {
      font-weight: 400;
      font-family: 'Source Sans Pro', sans-serif;
      src: url(${SourceSansPro}) format("truetype");
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Source Sans Pro', sans-serif;
    }
`;

export default GlobalStyle;
