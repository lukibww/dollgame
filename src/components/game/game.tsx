import { ReactNode, useMemo } from "react";
import GameContext from "./game-context";

export interface GameProps {
  children?: ReactNode;
  database: IDBDatabase;
}

function Game({ children, database }: GameProps) {
  const contextValue = useMemo(() => {
    return {};
  }, []);

  return (
    <GameContext.Provider value={contextValue as any}>
      {children}
    </GameContext.Provider>
  );
}

export default Game;
