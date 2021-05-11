import { NotFoundRedirect } from "../not-found-redirect";
import { useMusic } from "../../general";
import { genHash, useId } from "../../../utils";
import { useEffect, useMemo, useState } from "react";
import { DefaultParams, useLocation } from "wouter";
import { GameDialog } from "./dialog";
import { ChapterBackground, ChapterMain, ChapterAudio } from "../../styled";
import * as data from "../../../story/data";
import * as Spec from "../../../story/spec";

import gameplay from "../../../assets/audio/rozprawa_sądowa.mp3";
import win from "../../../assets/audio/win.mp3";
import loose from "../../../assets/audio/loose.mp3";
import click from "../../../assets/audio/click.mp3";

export interface GameChapterParams extends DefaultParams {
  slug: string;
}

interface GameChapterProps {
  params: GameChapterParams;
}

export function GameChapter({ params }: GameChapterProps) {
  const music = useMusic();

  const [dialog, setDialog] = useState<Spec.Dialog | null>(null);

  const [, setLocation] = useLocation();

  const chapter = useMemo(() => {
    return data.chapters.find((chapter) => chapter.slug === params.slug);
  }, [params.slug]);

  const gameplayId = useId();
  const winId = useId();
  const looseId = useId();

  useEffect(() => {
    if (music) {
      music.add({ key: gameplayId, src: gameplay, loop: true });
    }

    return () => {
      if (music) {
        music.remove(gameplayId);
        music.remove(winId);
        music.remove(looseId);
      }
    };
  }, [music, gameplayId, winId, looseId]);

  useEffect(() => {
    if (music && dialog) {
      if (dialog.type === "success") {
        music.add({ key: winId, src: win });
      }

      if (dialog.type === "failure") {
        music.add({ key: looseId, src: loose });
      }

      if (dialog.type !== "default") {
        music.remove(gameplayId);
      }
    }
  }, [music, dialog, gameplayId, looseId, winId]);

  if (music) {
    if (chapter && dialog) {
      const handleChoice = (value: Spec.Choice) => {
        music.add({ src: click, key: genHash() });

        const nextDialog = data.dialogs.find(
          (dialog) =>
            dialog.id === value.next && dialog.chapterId === chapter?.id
        );

        if (nextDialog) {
          setDialog(nextDialog);
        }
      };

      const handleEnd = () => {
        setLocation("/");
      };

      return (
        <ChapterBackground source={chapter.background}>
          <ChapterAudio src={chapter.audio} autoPlay loop />
          <ChapterMain>
            <GameDialog
              onChoice={handleChoice}
              onEnd={handleEnd}
              dialog={dialog}
            />
          </ChapterMain>
        </ChapterBackground>
      );
    }
  }

  return <NotFoundRedirect />;
}
