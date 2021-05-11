import { ThemeProvider } from "styled-components";
import { Container, Global } from "../styled";
import { Routes } from "../routes";
import { Nav } from "./nav";
import { Sentiniel } from "./sentiniel";
import { DataProvider } from "./data";

import theme from "../../theme";
import data from "../../story/data";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider data={data}>
        <Sentiniel />
        <Global />
        <Container>
          <Nav />
          <Routes />
        </Container>
      </DataProvider>
    </ThemeProvider>
  );
}
