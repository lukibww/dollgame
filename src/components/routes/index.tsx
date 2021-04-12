import { Route, Router, Switch } from "wouter";
import { Home } from "./home";
import { Game } from "./game";
import { Project } from "./project";
import { Authors } from "./authors";
import { Default } from "./default";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/game">
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
    </Router>
  );
}
