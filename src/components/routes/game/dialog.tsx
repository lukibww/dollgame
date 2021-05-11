import { NotFoundRedirect } from "../not-found-redirect";
import {
  Button,
  Dialog,
  DialogChoice,
  DialogLabel,
  DialogSection,
  DialogText,
  DialogResume,
  DialogCharacter,
  ChapterPage,
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
    <ChapterPage>
      <DialogCharacter source={character.image} />
      <Dialog column={special}>
        <DialogSection>
          <DialogLabel type={dialog.type}>{character.name}</DialogLabel>
          <DialogText>{dialog.text}</DialogText>
        </DialogSection>
        {special ? (
          <DialogResume>
            <Button onClick={onEnd}>Zakończ</Button>
          </DialogResume>
        ) : (
          <DialogSection>
            {choices
              .sort((a, b) => a.index - b.index)
              .map((choice) => (
                <DialogChoice key={choice.id} onClick={handleChoice(choice)}>
                  {choice.text}
                </DialogChoice>
              ))}
          </DialogSection>
        )}
      </Dialog>
    </ChapterPage>
  );
}
