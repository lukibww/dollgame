import { Fragment } from "react";
import {
  HomePreview,
  HomeGroup,
  HomeLabel,
  HomeWindow,
  HomeButton,
  Header,
} from "../../styled";
import * as data from "../../../story/data";
import { useLocation } from "wouter";

export function GameHome() {
  const [, setLocation] = useLocation();

  const handlePreviewClick = (slug: string) => () => {
    setLocation(`/game/${slug}`);
  };

  return (
    <Fragment>
      <Header small gutter>
        Gra
      </Header>
      <HomeGroup>
        {data.chapters
          .sort((a, b) => a.index - b.index)
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
