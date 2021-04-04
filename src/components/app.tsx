import { Switch, Route } from "wouter";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Container, Global } from "./styled";
import { Authors, Default, Game, Home, Project } from "./routes";
import Nav from "./nav";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Container>
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/play">
            <Game />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route>
            <Default />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
