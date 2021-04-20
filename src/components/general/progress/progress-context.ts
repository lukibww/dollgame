import { createContext } from "react";
import * as Spec from "../../../story/spec";

export interface ProgressContextValue {
  get(id: string): Spec.ProgressChapter | null;
  add(value: Spec.ProgressChapter): void;
  edit(id: string, value: Partial<Omit<Spec.ProgressChapter, "id">>): void;
  remove(id: string): void;
}

export const ProgressContext = createContext<ProgressContextValue | null>(null);
