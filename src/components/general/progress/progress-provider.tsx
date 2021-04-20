import { ReactNode, useCallback, useMemo } from "react";
import { ProgressContext, ProgressContextValue } from "./progress-context";
import * as Spec from "../../../story/spec";

export interface ProgressProviderProps {
  children?: ReactNode;
}

const defaultProgress: Spec.Progress = {
  started: false,
  chapterId: null,
  dialogId: null,
};

const progressKey = "user_progress";

export function ProgressProvider({ children }: ProgressProviderProps) {
  const isProgress = useCallback((value: any): value is Spec.Progress => {
    if (typeof value === "object" && value !== null) {
      const { started, chapterId, dialogId } = value;

      if (
        typeof started === "boolean" &&
        (typeof chapterId === "string" || chapterId === null) &&
        (typeof dialogId === "string" || dialogId === null)
      ) {
        return true;
      }
    }

    return false;
  }, []);

  const get = useCallback(() => {
    const item = localStorage.getItem(progressKey);

    if (item) {
      try {
        const parsed = JSON.parse(item);

        if (isProgress(parsed)) {
          return parsed;
        }
      } catch {
        return null;
      }
    }

    return null;
  }, [isProgress]);

  const add = useCallback((value: Spec.Progress) => {
    const stringified = JSON.stringify(value);

    localStorage.removeItem(progressKey);
    localStorage.setItem(progressKey, stringified);
  }, []);

  const edit = useCallback(
    (value: Partial<Spec.Progress>) => {
      const current = get();
      const item = current
        ? { ...current, ...value }
        : { ...defaultProgress, ...value };

      add(item);
    },
    [get, add]
  );

  const remove = useCallback(() => {
    localStorage.removeItem(progressKey);
  }, []);

  const contextValue = useMemo<ProgressContextValue>(() => {
    return {
      get,
      add,
      edit,
      remove,
    };
  }, [get, add, edit, remove]);

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
}
