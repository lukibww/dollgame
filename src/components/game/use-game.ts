import { useContext } from "react";
import GameContext from "./game-context";

function useGame() {
  const context = useContext(GameContext);
  return context;
}

export default useGame;
