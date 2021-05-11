import { useCallback, useEffect, useState, Fragment } from "react";
import { useLocation } from "wouter";
import { useData } from "../general";
import {
  HomePreview,
  HomeGroup,
  HomeLabel,
  HomeWindow,
  HomeButton,
  Paragraph,
  Header,
} from "../styled";

import RozprawaSądowa from "../../assets/images/rozprawa_sądowa.jpg";
import Adwokat from "../../assets/images/adwokat.png";
import Baronowa from "../../assets/images/baronowa.png";
import Dziecko from "../../assets/images/dziecko.png";
import Maruszewicz from "../../assets/images/maruszewicz.png";
import Rzecki from "../../assets/images/rzecki.png";
import Sędzia from "../../assets/images/sędzia.png";
import Służąca from "../../assets/images/służąca.png";
import Stawska from "../../assets/images/stawska.png";
import Wokulski from "../../assets/images/wokulski.png";

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
  const [, setLocation] = useLocation();
  const data = useData();

  const handlePreviewClick = (slug: string) => () => {
    setLocation(`/game/${slug}`);
  };

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
    <Fragment>
      <Header small gutter>
        Gra
      </Header>
      <HomeGroup>
        {data.chapters
          .sort((a, b) => a.id - b.id)
          .map(({ id, slug, name, background }) => (
            <HomePreview
              role="button"
              tabIndex={0}
              key={id}
              onClick={handlePreviewClick(slug)}
            >
              <HomeLabel>{name}</HomeLabel>
              <HomeWindow background={background}>
                <HomeButton as="div">Wejdź do gry</HomeButton>
              </HomeWindow>
            </HomePreview>
          ))}
      </HomeGroup>
    </Fragment>
  );
}
