import { Route, Switch } from "wouter";
import { GameHome } from "./home";
import { GameChapter, GameChapterParams } from "./chapter";
import { NotFoundRedirect } from "../not-found-redirect";

export function Game() {
  return (
    <Switch>
      <Route path="/game">
        <GameHome />
      </Route>
      <Route<GameChapterParams> path="/game/:slug">
        {(params) => <GameChapter params={params} />}
      </Route>
      <Route>
        <NotFoundRedirect />
      </Route>
    </Switch>
  );
}
