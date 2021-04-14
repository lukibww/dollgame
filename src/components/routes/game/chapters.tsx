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

  const handleChapterClick = (id: number) => () => {
    setLocation(`/${id}`);
  };

  return (
    <Fragment>
      <Header small gutter>
        Gra
      </Header>
      <ChapterGroup>
        {data.chapters.map(({ id, name, image }, index) => (
          <ChapterPreview
            role="button"
            tabIndex={0}
            key={id}
            selected={index === 0}
            onClick={handleChapterClick(id)}
          >
            <ChapterLabel>{name}</ChapterLabel>
            <ChapterWindow background={image} />
          </ChapterPreview>
        ))}
      </ChapterGroup>
    </Fragment>
  );
}
