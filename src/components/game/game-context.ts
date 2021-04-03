import { createContext } from "react";
import { Chapter, Choice, Dialog, Progress } from "../../story/spec";

export interface GameContextValue {
  startNew: () => Promise<void>;

  progress: () => Promise<Progress>;

  selectChapter: (id: string) => Promise<Dialog>;

  listChapters: () => Promise<Chapter[]>;
  listChoices: () => Promise<Choice[]>;

  prevDialog: () => Promise<Dialog>;
  nextDialog: (choiceId: string) => Promise<Dialog>;
}

const GameContext = createContext<GameContextValue | null>(null);

export default GameContext;
