import { createContext } from "react";
import * as Spec from "../../../story/spec";

export interface ProgressContextValue {
  get(): Spec.Progress | null;
  add(value: Spec.Progress): void;
  edit(value: Partial<Spec.Progress>): void;
  remove(): void;
}

export const ProgressContext = createContext<ProgressContextValue | null>(null);
