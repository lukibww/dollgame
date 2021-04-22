import { NotFoundRedirect } from "../not-found-redirect";
import { useBackground, useMusic, useProgress } from "../../general";
import { genHash } from "../../../utils";
import { useEffect, useMemo, useState } from "react";
import { DefaultParams, useLocation } from "wouter";
import { GameDialog } from "./dialog";
import { GameEntry } from "./entry";
import * as data from "../../../story/data";
import * as Spec from "../../../story/spec";
import click from "../../../assets/audio/click.wav";

export interface GameChapterParams extends DefaultParams {
  slug: string;
}

interface GameChapterProps {
  params: GameChapterParams;
}

export function GameChapter({ params }: GameChapterProps) {
  const progress = useProgress();
  const music = useMusic();

  const [dialog, setDialog] = useState<Spec.Dialog | null>(null);

  const background = useBackground();
  const [, setLocation] = useLocation();

  const chapter = useMemo(() => {
    return data.chapters.find((chapter) => chapter.slug === params.slug);
  }, [params.slug]);

  useEffect(() => {
    const set = (value: string | undefined) => {
      if (background) {
        const setBackground = background[1];
        setBackground(value);
      }
    };

    if (chapter) {
      set(chapter.background);
    }

    return () => {
      if (chapter) {
        set(undefined);
      }
    };
  }, [background, chapter]);

  if (progress && music) {
    if (chapter && dialog) {
      const handleChoice = (value: Spec.Choice) => {
        music.add({ src: click, key: genHash() });

        const nextDialog = data.dialogs.find(
          (dialog) =>
            dialog.id === value.next && dialog.chapterId === chapter?.id
        );

        if (nextDialog) {
          progress.edit(chapter.id, { dialogId: nextDialog.id });
          setDialog(nextDialog);
        }
      };

      const handleEnd = () => {
        progress.remove(chapter.id);

        setLocation("/");
      };

      return (
        <GameDialog onChoice={handleChoice} onEnd={handleEnd} dialog={dialog} />
      );
    } else if (chapter) {
      const started = !!progress.get(chapter.id)?.dialogId;

      const handleStart = () => {
        const item = progress.get(chapter.id);

        if (item) {
          const { dialogId } = item;

          const currentDialog = data.dialogs.find(
            (dialog) => dialog.id === dialogId
          );

          if (currentDialog) {
            setDialog(currentDialog);
          }
        } else {
          const firstDialog = data.dialogs.find((dialog) => dialog.index === 1);

          if (firstDialog) {
            progress.add({
              id: chapter.id,
              chapterId: chapter.id,
              dialogId: firstDialog.id,
            });

            setDialog(firstDialog);
          }
        }
      };

      return (
        <GameEntry started={started} onStart={handleStart} chapter={chapter} />
      );
    }
  }

  return <NotFoundRedirect />;
}
