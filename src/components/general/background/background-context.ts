import { createContext, Dispatch, SetStateAction } from "react";

export type BackgroundContextValue = [
  string | undefined,
  Dispatch<SetStateAction<string | undefined>>
];

export const BackgroundContext = createContext<BackgroundContextValue | null>(
  null
);
