import { Route, Switch } from "wouter";
import { Home } from "./home";
import { Game } from "./game";
import { Project } from "./project";
import { Authors } from "./authors";
import { NotFound } from "./not-found";
import { NotFoundRedirect } from "./not-found-redirect";

export function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/game/:rest*">
        <Game />
      </Route>
      <Route path="/project">
        <Project />
      </Route>
      <Route path="/authors">
        <Authors />
      </Route>
      <Route path="/not-found">
        <NotFound />
      </Route>
      <Route>
        <NotFoundRedirect />
      </Route>
    </Switch>
  );
}
