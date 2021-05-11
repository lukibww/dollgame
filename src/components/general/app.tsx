import { ThemeProvider } from "styled-components";
import { Container, Global } from "../styled";
import { Routes } from "../routes";
import { Nav } from "./nav";
import { Sentiniel } from "./sentiniel";
import { MusicProvider } from "./music";
import { BackgroundProvider } from "./background";
import { Backdrop } from "./backdrop";
import theme from "../../theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sentiniel />
      <BackgroundProvider>
        <MusicProvider>
          <Global />
          <Container>
            <Backdrop />
            <Nav />
            <Routes />
          </Container>
        </MusicProvider>
      </BackgroundProvider>
    </ThemeProvider>
  );
}
