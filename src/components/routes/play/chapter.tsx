import { NotFoundRedirect } from "../not-found-redirect";
import { Fragment, useMemo, useState } from "react";
import { DefaultParams } from "wouter";
import { GameDialog } from "./dialog";
import { GameEntry } from "./entry";
import {
  ChapterWrapper,
  ChapterBackground,
  ChapterMain,
  Audio,
} from "../../styled";
import { GameSuccess } from "./success";
import { GameFailure } from "./failure";
import { useData } from "../../general/data";
import * as Spec from "../../../story/spec";

export interface GameChapterParams extends DefaultParams {
  slug: string;
}

interface GameChapterProps {
  params: GameChapterParams;
}

export function GameChapter({ params }: GameChapterProps) {
  const data = useData();

  const chapter = useMemo(() => {
    return data.chapters.find((chapter) => chapter.slug === params.slug);
  }, [data, params.slug]);

  const [dialog, setDialog] = useState<Spec.Dialog | null>(null);

  if (chapter) {
    if (dialog) {
      const handleChoice = (value: Spec.Choice) => {
        const nextDialog = data.dialogs.find(
          (dialog) =>
            dialog.id === value.next && dialog.chapterId === chapter?.id
        );

        if (nextDialog) {
          setDialog(nextDialog);
        }
      };

      return (
        <ChapterWrapper>
          <ChapterBackground source={chapter.background} />
          <ChapterMain>
            {dialog.type === "success" ? (
              <GameSuccess message={dialog.text} />
            ) : dialog.type === "failure" ? (
              <GameFailure message={dialog.text} />
            ) : (
              <Fragment>
                <Audio src={chapter.audio} autoPlay loop />
                <GameDialog onChoice={handleChoice} dialog={dialog} />
              </Fragment>
            )}
          </ChapterMain>
        </ChapterWrapper>
      );
    } else {
      const handleStart = () => {
        const first = data.dialogs.find(
          (dialog) => dialog.chapterId === chapter?.id && dialog.id === 1
        );

        if (first) {
          setDialog(first);
        }
      };

      return (
        <ChapterWrapper>
          <ChapterBackground source={chapter.background} />
          <ChapterMain>
            <GameEntry chapter={chapter} onStart={handleStart} />
          </ChapterMain>
        </ChapterWrapper>
      );
    }
  }

  return <NotFoundRedirect />;
}
