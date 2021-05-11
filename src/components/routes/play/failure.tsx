import { Button, DialogLabel, DialogText, DialogResume } from "../../styled";
import { Link as WouterLink } from "wouter";
import { useData } from "../../general";
import { Audio } from "../../styled";
import { Fragment } from "react";

export interface GameFailureProps {
  message: string;
}

export function GameFailure({ message }: GameFailureProps) {
  const { metadata } = useData();

  return (
    <Fragment>
      <Audio src={metadata.loose} autoPlay loop />
      <DialogResume>
        <DialogLabel>Przegrana</DialogLabel>
        <DialogText>{message}</DialogText>
        <WouterLink href="/game">
          <Button>Zakończ</Button>
        </WouterLink>
      </DialogResume>
    </Fragment>
  );
}
