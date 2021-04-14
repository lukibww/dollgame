import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      text: string;
      primary: string;
      secondary: string;
      error: string;
      label: string;
    };
    fonts: {
      heading: string;
      body: string;
      button: string;
    };
  }
}
