import { Route, Router, Switch } from "wouter";
import { GameChapters } from "./chapters";
import { GameDefault } from "./default";
import { GameChapter, GameChapterParams } from "./chapter";

export function Game() {
  return (
    <Router base="/game">
      <Switch>
        <Route path="/">
          <GameChapters />
        </Route>
        <Route<GameChapterParams> path="/:chapter">
          {(params) => <GameChapter params={params} />}
        </Route>
        <Route>
          <GameDefault />
        </Route>
      </Switch>
    </Router>
  );
}
