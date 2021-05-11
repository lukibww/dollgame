import { ThemeProvider } from "styled-components";
import { Container, Global } from "../styled";
import { Routes } from "../routes";
import { Nav } from "./nav";
import { Sentiniel } from "./sentiniel";
import theme from "../../theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sentiniel />
      <Global />
      <Container>
        <Nav />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}
