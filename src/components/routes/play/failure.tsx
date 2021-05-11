import { Button, DialogLabel, DialogText } from "../../styled";
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
      <DialogLabel>Przegrana</DialogLabel>
      <DialogText>{message}</DialogText>
      <WouterLink href="/">
        <Button>Zakończ</Button>
      </WouterLink>
    </Fragment>
  );
}
