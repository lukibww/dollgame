import { useContext } from "react";
import { BackgroundContext } from "./background-context";

export function useBackground() {
  const context = useContext(BackgroundContext);
  return context;
}
