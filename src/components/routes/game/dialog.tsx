import { NotFoundRedirect } from "../not-found-redirect";
import {
  Button,
  DialogMain,
  DialogChoice,
  DialogLabel,
  DialogText,
  DialogResume,
  DialogCharacter,
  DialogChoices,
  DialogReturn,
} from "../../styled";
import { Link as WouterLink } from "wouter";
import * as data from "../../../story/data";
import * as Spec from "../../../story/spec";
import { DialogBackground } from "../../styled/game/dialogs/dialog-background";

interface GameDialogProps {
  dialog?: Spec.Dialog;
  onEnd?: () => void;
  onChoice?: (value: Spec.Choice) => void;
}

export function GameDialog({ dialog, onChoice, onEnd }: GameDialogProps) {
  const special = dialog && dialog.type !== "default";
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
    <DialogMain>
      <DialogCharacter source={character.image} />
      <DialogLabel>{character.name}</DialogLabel>
      <DialogText>{dialog.text}</DialogText>
      {special ? (
        <DialogResume>
          <Button onClick={onEnd}>Zakończ</Button>
        </DialogResume>
      ) : (
        <DialogChoices>
          {choices
            .sort((a, b) => a.index - b.index)
            .map((choice) => (
              <DialogChoice key={choice.id} onClick={handleChoice(choice)}>
                {choice.text}
              </DialogChoice>
            ))}
        </DialogChoices>
      )}
      <WouterLink href="/game">
        <DialogReturn>Powrót</DialogReturn>
      </WouterLink>
    </DialogMain>
  );
}
