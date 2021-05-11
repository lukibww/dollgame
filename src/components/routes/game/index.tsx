import { useCallback, useEffect, useState } from "react";
import { Route, Switch } from "wouter";
import { GameHome } from "./home";
import { Paragraph } from "../../styled";
import { GameChapter, GameChapterParams } from "./chapter";
import { NotFoundRedirect } from "../not-found-redirect";

import RozprawaSądowa from "../../../assets/images/rozprawa_sądowa.jpg";
import Adwokat from "../../../assets/images/adwokat.png";
import Baronowa from "../../../assets/images/baronowa.png";
import Dziecko from "../../../assets/images/dziecko.png";
import Maruszewicz from "../../../assets/images/maruszewicz.png";
import Rzecki from "../../../assets/images/rzecki.png";
import Sędzia from "../../../assets/images/sędzia.png";
import Służąca from "../../../assets/images/służąca.png";
import Stawska from "../../../assets/images/stawska.png";
import Wokulski from "../../../assets/images/wokulski.png";

const assets = [
  RozprawaSądowa,
  Adwokat,
  Baronowa,
  Dziecko,
  Maruszewicz,
  Rzecki,
  Sędzia,
  Służąca,
  Stawska,
  Wokulski,
];

export function Game() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    try {
      await Promise.all(
        assets.map(
          (asset) =>
            new Promise((resolve, reject) => {
              const image = new Image();

              image.src = asset;
              image.onload = resolve;
              image.onerror = reject;
            })
        )
      );

      setLoaded(true);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  if (error) {
    return <Paragraph>Błąd</Paragraph>;
  }

  if (!loaded) {
    return <Paragraph>Ładowanie...</Paragraph>;
  }

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
