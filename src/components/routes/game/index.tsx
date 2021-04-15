import { Route, Switch } from "wouter";
import { GameChapters } from "./chapters";
import { GameChapter, GameChapterParams } from "./chapter";
import { GameDialog, GameDialogParams } from "./dialog";
import { NotFoundRedirect } from "../not-found-redirect";

export function Game() {
  return (
    <Switch>
      <Route path="/game">
        <GameChapters />
      </Route>
      <Route<GameChapterParams> path="/game/:chapter">
        {(params) => <GameChapter params={params} />}
      </Route>
      <Route<GameDialogParams> path="/game/:chapter/:dialog">
        {(params) => <GameDialog params={params} />}
      </Route>
      <Route>
        <NotFoundRedirect />
      </Route>
    </Switch>
  );
}
