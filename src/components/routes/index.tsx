import { Route, Switch, useRoute } from "wouter";
import { Home } from "./home";
import { Game } from "./game";
import { Project } from "./project";
import { Authors } from "./authors";
import { NotFound } from "./not-found";
import { NotFoundRedirect } from "./not-found-redirect";
import { Container } from "../styled";
import { Play, PlayParams } from "./play";
import { Nav } from "../general";

export function Routes() {
  const [play, params] = useRoute<PlayParams>("/game/:slug");

  if (play && params) {
    return <Play params={params} />;
  }

  return (
    <Container>
      <Nav />
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
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route>
          <NotFoundRedirect />
        </Route>
      </Switch>
    </Container>
  );
}
