import { NotFoundRedirect } from "../not-found-redirect";
import {
  Button,
  Dialog,
  DialogChoice,
  DialogLabel,
  DialogSection,
  DialogText,
  DialogResume,
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

  if (!dialog) return <NotFoundRedirect />;

  return (
    <Dialog column={special}>
      <DialogSection>
        <DialogLabel type={dialog.type}>{dialog.label}</DialogLabel>
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
  );
}
