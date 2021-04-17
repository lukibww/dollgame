import { useMemo } from "react";
import { DefaultParams, useLocation, Link as WouterLink } from "wouter";
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

export interface GameDialogParams extends DefaultParams {
  chapter: string;
  dialog: string;
}

interface GameDialogProps {
  params: GameDialogParams;
}

export function GameDialog({ params }: GameDialogProps) {
  const [, setLocation] = useLocation();

  const chapterId = useMemo(() => {
    const parsed = parseInt(params.chapter);

    if (isFinite(parsed)) {
      return parsed;
    }

    return -1;
  }, [params]);

  const dialogId = useMemo(() => {
    const parsed = parseInt(params.dialog);

    if (isFinite(parsed)) {
      return parsed;
    }

    return -1;
  }, [params]);

  const dialog = useMemo(() => {
    return data.dialogs.find((dialog) => dialog.id === dialogId) || null;
  }, [dialogId]);

  const choices = useMemo(() => {
    return data.choices.filter((choice) => choice.dialogId === dialogId);
  }, [dialogId]);

  const special = useMemo(() => {
    if (dialog) {
      return dialog.type !== "default";
    }

    return false;
  }, [dialog]);

  const handleChoice = (choice: Spec.Choice) => () => {
    const { next } = choice;

    const dialogId = data.dialogs.find(
      (dialog) => dialog.id === next && dialog.chapterId === chapterId
    )?.id;

    if (dialogId) {
      setLocation(`/game/${chapterId}/${dialogId}`);
    } else {
      setLocation("/not-found");
    }
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
          <WouterLink href="/">
            <Button as="a">Zakończ</Button>
          </WouterLink>
          <WouterLink href="/">
            <Button as="a">Cofnij</Button>
          </WouterLink>
        </DialogResume>
      ) : (
        <DialogSection>
          {choices.map((choice) => (
            <DialogChoice onClick={handleChoice(choice)}>
              {choice.text}
            </DialogChoice>
          ))}
        </DialogSection>
      )}
    </Dialog>
  );
}
