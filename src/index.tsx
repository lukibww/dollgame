import ReactDOM from "react-dom";
import { App, IndexedDB, ErrorBoundary } from "./components";
import "./styles/index.scss";

ReactDOM.render(
  <ErrorBoundary>
    <IndexedDB>
      <App />
    </IndexedDB>
  </ErrorBoundary>,
  document.getElementById("root")
);
