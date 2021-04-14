import { useMemo } from "react";
import { DefaultParams, Redirect } from "wouter";
import {
  Header,
  Paragraph,
  ChapterPage,
  ChapterSection,
  Button,
} from "../../styled";
import * as data from "../../../story/data";

export interface GameChapterParams extends DefaultParams {
  chapter: string;
}

interface GameChapterProps {
  params: GameChapterParams;
}

export function GameChapter({ params }: GameChapterProps) {
  const chapterId = useMemo(() => {
    const parsed = parseInt(params.chapter);

    if (isFinite(parsed)) {
      return parsed;
    }

    return -1;
  }, [params]);

  const chapter = useMemo(() => {
    return data.chapters.find((chapter) => chapter.id === chapterId);
  }, [chapterId]);

  if (!chapter) return <Redirect href="/not-found" />;

  return (
    <ChapterPage>
      <ChapterSection>
        <Header small gutter>
          {chapter.name}
        </Header>
        <Paragraph gutter>{chapter.description}</Paragraph>
        <Button>Rozpocznij</Button>
      </ChapterSection>
    </ChapterPage>
  );
}
