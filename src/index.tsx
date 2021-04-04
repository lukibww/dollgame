import ReactDOM from "react-dom";
import { Fragment } from "react";
import { App, IndexedDB, ErrorBoundary, GlobalStyle } from "./components";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <ErrorBoundary>
      <IndexedDB>
        <App />
      </IndexedDB>
    </ErrorBoundary>
  </Fragment>,
  document.getElementById("root")
);
