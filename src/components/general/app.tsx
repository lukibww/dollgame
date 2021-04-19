import { DefaultTheme, ThemeProvider } from "styled-components";
import { Container, Global } from "../styled";
import { Routes } from "../routes";
import { Nav } from "./nav";
import { Music } from "./music";
import { Sentiniel } from "./sentiniel";

const theme: DefaultTheme = {
  colors: {
    background: "#e0e2db",
    surface: "#a7afb4",
    text: "#2e3836",
    primary: "#33475b",
    secondary: "#337045",
    error: "#8f2c28",
    label: "#613a42",
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
      <Sentiniel />
      <Music />
      <Container>
        <Nav />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}
