import { DefaultTheme, ThemeProvider } from "styled-components";
import { Container, Global } from "./styled";
import { Nav } from "./nav";
import { Routes } from "./routes";

const theme: DefaultTheme = {
  colors: {
    background: "#e0e2db",
    surface: "#a7afb4",
    text: "#2e3836",
    primary: "#33475b",
    secondary: "#337045",
    error: "#8f2c28",
  },
  fonts: {
    heading: "'Dancing Script'",
    body: "'Source Sans Pro'",
    button: "'Raleway'",
  },
};

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Container>
        <Nav />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}
