import { ThemeProvider } from "styled-components";
import { Global } from "../styled";
import { Routes } from "../routes";
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
        <Routes />
      </DataProvider>
    </ThemeProvider>
  );
}
