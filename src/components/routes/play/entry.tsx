import { Fragment } from "react";
import { Chapter } from "../../../story/spec";
import { Button, DialogLabel, DialogText } from "../../styled";

export interface GameEntryProps {
  chapter: Chapter;
  onStart: () => void;
}

export function GameEntry({ chapter, onStart }: GameEntryProps) {
  return (
    <Fragment>
      <DialogLabel>{chapter.name}</DialogLabel>
      <DialogText>{chapter.description}</DialogText>
      <Button onClick={onStart}>Rozpocznij</Button>
    </Fragment>
  );
}
