import { Button, DialogLabel, DialogText, Audio } from "../../styled";
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
      <DialogLabel>Wygrana</DialogLabel>
      <DialogText>{message}</DialogText>
      <WouterLink href="/">
        <Button as="a">Strona Główna</Button>
      </WouterLink>
    </Fragment>
  );
}
