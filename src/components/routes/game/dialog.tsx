import { NotFoundRedirect } from "../not-found-redirect";
import {
  Button,
  Dialog,
  DialogChoice,
  DialogLabel,
  DialogText,
  DialogResume,
  DialogCharacter,
  DialogChoices,
} from "../../styled";
import * as data from "../../../story/data";
import * as Spec from "../../../story/spec";

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
    <Dialog>
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
    </Dialog>
  );
}
