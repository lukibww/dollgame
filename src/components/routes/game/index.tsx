import { useEffect } from "react";
import { Route, Switch } from "wouter";
import { GameHome } from "./home";
import { GameChapter, GameChapterParams } from "./chapter";
import { NotFoundRedirect } from "../not-found-redirect";
import { useMusic } from "../../general";
import { useId } from "../../../utils";

import soundtrack from "../../../assets/audio/doll.mp3";

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
