import { Fragment } from "react";
import {
  Chapter,
  ChapterGroup,
  ChapterLabel,
  ChapterWindow,
  Header,
} from "../../styled";
import { chapters } from "../../../story/data";

export function GameChapters() {
  return (
    <Fragment>
      <Header small gutter>
        Gra
      </Header>
      <ChapterGroup>
        {chapters.map(({ id, name }, index) => (
          <Chapter role="button" tabIndex={0} key={id} selected={index === 0}>
            <ChapterLabel>{name}</ChapterLabel>
            <ChapterWindow />
          </Chapter>
        ))}
      </ChapterGroup>
    </Fragment>
  );
}
