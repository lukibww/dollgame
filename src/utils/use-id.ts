import { useMemo } from "react";
import { genHash } from "./gen-hash";

export function useId() {
  return useMemo(() => genHash(), []);
}
