import { Fragment } from "react";
import {
  ChapterPreview,
  ChapterGroup,
  ChapterLabel,
  ChapterWindow,
  Header,
} from "../../styled";
import * as data from "../../../story/data";
import { useLocation } from "wouter";

export function GameChapters() {
  const [, setLocation] = useLocation();

  const handleChapterClick = (slug: string) => () => {
    setLocation(`/game/${slug}`);
  };

  return (
    <Fragment>
      <Header small gutter>
        Gra
      </Header>
      <ChapterGroup>
        {data.chapters
          .sort((a, b) => a.index - b.index)
          .map(({ id, slug, name, background }) => (
            <ChapterPreview
              role="button"
              tabIndex={0}
              key={id}
              onClick={handleChapterClick(slug)}
            >
              <ChapterLabel>{name}</ChapterLabel>
              <ChapterWindow background={background} />
            </ChapterPreview>
          ))}
      </ChapterGroup>
    </Fragment>
  );
}
