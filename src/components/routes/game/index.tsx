import { useEffect } from "react";
import { Route, Switch } from "wouter";
import { GameHome } from "./home";
import { GameChapter, GameChapterParams } from "./chapter";
import { NotFoundRedirect } from "../not-found-redirect";

import Adwokat from "../../../assets/images/adwokat.jpg";
import Baronowa from "../../../assets/images/baronowa.jpg";
import Dziecko from "../../../assets/images/dziecko.jpg";
import Maruszewicz from "../../../assets/images/maruszewicz.jpg";
import Rzecki from "../../../assets/images/rzecki.jpg";
import Sędzia from "../../../assets/images/sędzia.jpg";
import Służąca from "../../../assets/images/służąca.jpg";
import Stawska from "../../../assets/images/stawska.jpg";
import Wokulski from "../../../assets/images/wokulski.jpg";

export function Game() {
  useEffect(() => {
    new Image().src = Adwokat;
    new Image().src = Baronowa;
    new Image().src = Dziecko;
    new Image().src = Maruszewicz;
    new Image().src = Rzecki;
    new Image().src = Sędzia;
    new Image().src = Służąca;
    new Image().src = Stawska;
    new Image().src = Wokulski;
  }, []);

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
