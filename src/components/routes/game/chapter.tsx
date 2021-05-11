import { NotFoundRedirect } from "../not-found-redirect";
import { useMemo, useState } from "react";
import { DefaultParams, useLocation } from "wouter";
import { GameDialog } from "./dialog";
import { ChapterBackground, ChapterMain, ChapterAudio } from "../../styled";
import * as Spec from "../../../story/spec";
import { useData } from "../../general/data";

export interface GameChapterParams extends DefaultParams {
  slug: string;
}

interface GameChapterProps {
  params: GameChapterParams;
}

export function GameChapter({ params }: GameChapterProps) {
  const data = useData();

  const [, setLocation] = useLocation();

  const chapter = useMemo(() => {
    return data.chapters.find((chapter) => chapter.slug === params.slug);
  }, [data, params.slug]);

  const [dialog, setDialog] = useState(() =>
    data.dialogs.find(
      (dialog) => dialog.chapterId === chapter?.id && dialog.index === 1
    )
  );

  if (chapter && dialog) {
    const handleChoice = (value: Spec.Choice) => {
      const nextDialog = data.dialogs.find(
        (dialog) => dialog.id === value.next && dialog.chapterId === chapter?.id
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

  return <NotFoundRedirect />;
}
