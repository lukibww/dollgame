import { NotFoundRedirect } from "../not-found-redirect";
import {
  DialogChoice,
  DialogLabel,
  DialogText,
  DialogCharacter,
  DialogChoices,
  DialogReturn,
} from "../../styled";
import { Link as WouterLink } from "wouter";
import * as Spec from "../../../story/spec";
import { Fragment } from "react";
import { useData } from "../../general/data";

interface GameDialogProps {
  dialog?: Spec.Dialog;
  onChoice?: (value: Spec.Choice) => void;
}

export function GameDialog({ dialog, onChoice }: GameDialogProps) {
  const data = useData();

  const choices = data.choices.filter(
    (choice) => choice.dialogId === dialog?.id
  );

  const handleChoice = (choice: Spec.Choice) => () => {
    onChoice?.(choice);
  };

  const character = data.characters.find(
    (character) => character.id === dialog?.characterId
  );

  if (!dialog || !character) return <NotFoundRedirect />;

  return (
    <Fragment>
      <DialogCharacter source={character.image} />
      <DialogLabel>{character.name}</DialogLabel>
      <DialogText>{dialog.text}</DialogText>
      <DialogChoices>
        {choices
          .sort((a, b) => a.index - b.index)
          .map((choice) => (
            <DialogChoice key={choice.id} onClick={handleChoice(choice)}>
              {choice.text}
            </DialogChoice>
          ))}
      </DialogChoices>
      <WouterLink href="/game">
        <DialogReturn>Powrót</DialogReturn>
      </WouterLink>
    </Fragment>
  );
}
