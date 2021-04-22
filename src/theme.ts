export type ThemeColor =
  | "background"
  | "text"
  | "primary"
  | "secondary"
  | "success"
  | "error";

export type ThemeFont = "heading" | "body" | "button";

export interface Theme {
  colors: {
    [P in ThemeColor]: string;
  };
  fonts: {
    [P in ThemeFont]: string;
  };
}

const theme: Theme = {
  colors: {
    background: "#e0e2db",
    text: "#2e3836",
    primary: "#33475b",
    secondary: "#73454e",
    success: "#337045",
    error: "#8f2c28",
  },
  fonts: {
    heading: "'Dancing Script'",
    body: "'Source Sans Pro'",
    button: "'Raleway'",
  },
};

export default theme;
