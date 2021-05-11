import { GameChapter, GameChapterParams } from "./chapter";

export type PlayParams = GameChapterParams;

export interface PlayProps {
  params: PlayParams;
}

export function Play(props: PlayProps) {
  return <GameChapter {...props} />;
}
