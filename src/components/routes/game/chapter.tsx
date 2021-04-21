import { useMemo } from "react";
import { DefaultParams, Link as WouterLink } from "wouter";
import {
  Header,
  Paragraph,
  ChapterPage,
  ChapterSection,
  Button,
} from "../../styled";
import { NotFoundRedirect } from "../not-found-redirect";
import * as data from "../../../story/data";

export interface GameChapterParams extends DefaultParams {
  chapter: string;
}

interface GameChapterProps {
  params: GameChapterParams;
}

export function GameChapter({ params }: GameChapterProps) {
  const chapterSlug = useMemo(() => {
    return params.chapter;
  }, [params]);

  const chapter = useMemo(() => {
    return data.chapters.find((chapter) => chapter.slug === chapterSlug);
  }, [chapterSlug]);

  const href = useMemo(() => {
    if (chapter) {
      const dialogs = data.dialogs.filter(
        (dialog) => dialog.chapterId === chapter?.id
      );

      const dialogId = dialogs.sort((a, b) => a.index - b.index)[0]?.id;

      if (dialogId) {
        return `/game/${chapterSlug}/${dialogId}`;
      }
    }

    return null;
  }, [chapterSlug, chapter]);

  if (!chapter || !href) return <NotFoundRedirect />;

  return (
    <ChapterPage>
      <ChapterSection>
        <Header small gutter>
          {chapter.name}
        </Header>
        <Paragraph gutter>{chapter.description}</Paragraph>
        <WouterLink href={href}>
          <Button as="a">Rozpocznij</Button>
        </WouterLink>
      </ChapterSection>
    </ChapterPage>
  );
}
