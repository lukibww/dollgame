import ReactDOM from "react-dom";
import { App, IndexedDB } from "./components";
import "./styles/index.scss";

ReactDOM.render(
  <IndexedDB>
    <App />
  </IndexedDB>,
  document.getElementById("root")
);
