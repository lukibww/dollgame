import {
  ChapterPage,
  ChapterSection,
  Header,
  Paragraph,
  Button,
} from "../../styled";
import * as Spec from "../../../story/spec";
import { NotFoundRedirect } from "../not-found-redirect";

export interface GameEntryProps {
  started?: boolean;
  chapter?: Spec.Chapter;
  onStart?: () => void;
}

export function GameEntry({ chapter, started, onStart }: GameEntryProps) {
  if (!chapter) return <NotFoundRedirect />;

  return (
    <ChapterPage>
      <ChapterSection>
        <Header small gutter>
          {chapter.name}
        </Header>
        <Paragraph gutter>{chapter.description}</Paragraph>
        <Button onClick={onStart}>
          {started ? "Kontyntynuj" : "Rozpocznij"}
        </Button>
      </ChapterSection>
    </ChapterPage>
  );
}
