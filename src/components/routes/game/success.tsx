import { Button, DialogLabel, DialogText, DialogResume } from "../../styled";
import { Link as WouterLink } from "wouter";

export interface GameSuccessProps {
  message: string;
}

export function GameSuccess({ message }: GameSuccessProps) {
  return (
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
  );
}
