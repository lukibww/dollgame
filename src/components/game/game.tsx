import { ReactNode, useMemo } from "react";
import GameContext, { GameContextValue } from "./game-context";

export interface GameProps {
  children?: ReactNode;
  database: IDBDatabase;
}

function Game({ children, database }: GameProps) {
  const contextValue = useMemo<GameContextValue>(() => {
    return {};
  }, []);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export default Game;
