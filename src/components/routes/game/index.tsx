import { useEffect } from "react";
import { Route, Switch } from "wouter";
import { GameHome } from "./home";
import { GameChapter, GameChapterParams } from "./chapter";
import { NotFoundRedirect } from "../not-found-redirect";

import Adwokat from "../../../assets/images/adwokat.png";
import Baronowa from "../../../assets/images/baronowa.png";
import Dziecko from "../../../assets/images/dziecko.png";
import Maruszewicz from "../../../assets/images/maruszewicz.png";
import Rzecki from "../../../assets/images/rzecki.png";
import Sędzia from "../../../assets/images/sędzia.png";
import Służąca from "../../../assets/images/służąca.png";
import Stawska from "../../../assets/images/stawska.png";
import Wokulski from "../../../assets/images/wokulski.png";

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
