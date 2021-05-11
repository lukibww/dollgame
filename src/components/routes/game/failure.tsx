import { Button, DialogLabel, DialogText, DialogResume } from "../../styled";
import { Link as WouterLink } from "wouter";

export interface GameFailureProps {
  message: string;
}

export function GameFailure({ message }: GameFailureProps) {
  return (
    <DialogResume>
      <DialogLabel>Przegrana</DialogLabel>
      <DialogText>{message}</DialogText>
      <WouterLink href="/game">
        <Button>Zakończ</Button>
      </WouterLink>
    </DialogResume>
  );
}
