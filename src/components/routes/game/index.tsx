import { useEffect } from "react";
import { Route, Switch } from "wouter";
import { GameChapters } from "./chapters";
import { GameChapter, GameChapterParams } from "./chapter";
import { GameDialog, GameDialogParams } from "./dialog";
import { NotFoundRedirect } from "../not-found-redirect";
import { useMusic } from "../../general";
import { useId } from "../../../utils";
import soundtrack from "../../../assets/audio/soundtrack.mp3";

export function Game() {
  const key = useId();
  const music = useMusic();

  useEffect(() => {
    music?.add({ key, src: soundtrack, loop: true });

    return () => {
      music?.remove(key);
    };
  }, [music, key]);

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
