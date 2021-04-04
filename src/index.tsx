import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { App, IndexedDB, ErrorBoundary, GlobalStyle } from "./components";
import dollTheme from "./doll-theme";

ReactDOM.render(
  <ThemeProvider theme={dollTheme}>
    <GlobalStyle />
    <ErrorBoundary>
      <IndexedDB>
        <App />
      </IndexedDB>
    </ErrorBoundary>
  </ThemeProvider>,
  document.getElementById("root")
);
