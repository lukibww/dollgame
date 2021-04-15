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
  const chapterId = useMemo(() => {
    const parsed = parseInt(`${+params.chapter}`);

    if (isFinite(parsed)) {
      return parsed;
    }

    return -1;
  }, [params]);

  const chapter = useMemo(() => {
    return data.chapters.find((chapter) => chapter.id === chapterId);
  }, [chapterId]);

  const href = useMemo(() => {
    const dialogs = data.dialogs.filter(
      (dialog) => dialog.chapterId === chapterId
    );

    const dialogId = dialogs.sort((a, b) => a.id - b.id)[0]?.id;

    if (!dialogId) {
      return null;
    }

    return `/game/${chapterId}/${dialogId}`;
  }, [chapterId]);

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
