import { Fragment, useMemo } from "react";
import { DefaultParams } from "wouter";
import { NotFoundRedirect } from "../not-found-redirect";
import * as data from "../../../story/data";

export interface GameDialogParams extends DefaultParams {
  chapter: string;
  dialog: string;
}

interface GameDialogProps {
  params: GameDialogParams;
}

export function GameDialog({ params }: GameDialogProps) {
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

  if (!dialog) return <NotFoundRedirect />;

  return (
    <Fragment>
      Dialog {dialog.id} with {choices.length} choices
    </Fragment>
  );
}
