import {
  Button,
  DialogLabel,
  DialogText,
  DialogResume,
  Audio,
} from "../../styled";
import { Link as WouterLink } from "wouter";
import { useData } from "../../general";
import { Fragment } from "react";

export interface GameSuccessProps {
  message: string;
}

export function GameSuccess({ message }: GameSuccessProps) {
  const { metadata } = useData();

  return (
    <Fragment>
      <Audio src={metadata.win} autoPlay loop />
      <DialogResume>
        <DialogLabel>Wygrana</DialogLabel>
        <DialogText>{message}</DialogText>
        <WouterLink href="/">
          <Button as="a">Strona Główna</Button>
        </WouterLink>
        <WouterLink href="/project">
          <Button as="a">Projekt</Button>
        </WouterLink>
        <WouterLink href="/authors">
          <Button as="a">Autorzy</Button>
        </WouterLink>
      </DialogResume>
    </Fragment>
  );
}
