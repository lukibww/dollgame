import { useContext } from "react";
import { ProgressContext } from "./progress-context";

export function useProgress() {
  const context = useContext(ProgressContext);
  return context;
}
