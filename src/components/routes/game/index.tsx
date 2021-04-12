import { Route, Router, Switch } from "wouter";
import { GameChapters } from "./chapters";
import { GameDefault } from "./default";

export function Game() {
  return (
    <Router base="/game">
      <Switch>
        <Route path="/">
          <GameChapters />
        </Route>
        <Route>
          <GameDefault />
        </Route>
      </Switch>
    </Router>
  );
}
