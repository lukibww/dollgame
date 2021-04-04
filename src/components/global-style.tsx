import { createGlobalStyle } from "styled-components";

import RobotoLight from "../assets/fonts/Roboto-Light.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-weight: 300;
      font-family: "Roboto", sans-serif;
      src: url(${RobotoLight}) format("truetype");
    }

    @font-face {
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      src: url(${RobotoRegular}) format("truetype");
    }

    @font-face {
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      src: url(${RobotoMedium}) format("truetype");
    }

    @font-face {
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      src: url(${RobotoBold}) format("truetype");
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Roboto", sans-serif;
    }
`;

export default GlobalStyle;
