import { useMemo, useState } from "react";
import {
  BackgroundContext,
  BackgroundContextValue,
} from "./background-context";

export interface BackgroundProviderProps {
  children?: boolean;
}

export function BackgroundProvider({ children }: BackgroundProviderProps) {
  const [state, setState] = useState<string>();

  const contextValue = useMemo<BackgroundContextValue>(() => {
    return [state, setState];
  }, [state]);

  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
}
