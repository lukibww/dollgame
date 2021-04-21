import { ReactNode, useCallback, useMemo } from "react";
import { ProgressContext, ProgressContextValue } from "./progress-context";
import * as data from "../../../story/data";
import * as Spec from "../../../story/spec";

export interface ProgressProviderProps {
  children?: ReactNode;
}

const progressKey = "user_progress";

const defaultProgress: Spec.Progress = {
  version: data.version,
  chapters: [],
};

export function ProgressProvider({ children }: ProgressProviderProps) {
  const isChapter = useCallback((value: any): value is Spec.ProgressChapter => {
    if (typeof value === "object" && value !== null) {
      const { id, chapterId, dialogId } = value;

      if (
        typeof id === "string" &&
        typeof chapterId === "string" &&
        typeof dialogId === "string"
      ) {
        const chapter = data.chapters.find(
          (chapter) => chapter.id === chapterId
        );
        const dialog = data.dialogs.find((dialog) => dialog.id === dialogId);

        return !!chapter && !!dialog;
      }
    }

    return false;
  }, []);

  const isProgress = useCallback((value: any): value is Spec.Progress => {
    if (typeof value === "object" && value !== null) {
      const { chapters } = value;

      if (Array.isArray(chapters)) {
        return true;
      }
    }

    return false;
  }, []);

  const setProgress = useCallback((value: Spec.Progress) => {
    const stringified = JSON.stringify(value);
    localStorage.setItem(progressKey, stringified);
  }, []);

  const createProgress = useCallback(() => {
    const item = defaultProgress;

    setProgress(defaultProgress);

    return item;
  }, [setProgress]);

  const getProgress = useCallback(() => {
    const item = localStorage.getItem(progressKey);

    if (item) {
      try {
        const parsed = JSON.parse(item);

        if (isProgress(parsed)) {
          return parsed;
        }
      } catch {}
    }

    return createProgress();
  }, [isProgress, createProgress]);

  const checkVersion = useCallback(() => {
    const progress = getProgress();

    if (progress.version !== data.version) {
      setProgress({ chapters: [], version: data.version });
    }
  }, [getProgress, setProgress]);

  const get = useCallback(
    (id: string) => {
      checkVersion();
      const progress = getProgress();

      if (progress) {
        const { chapters } = progress;

        const chapter = chapters.find((chapter) => chapter.id === id);

        if (isChapter(chapter)) {
          return chapter;
        }
      }

      return null;
    },
    [checkVersion, getProgress, isChapter]
  );

  const add = useCallback(
    (value: Spec.ProgressChapter) => {
      checkVersion();
      const previous = getProgress();

      if (previous) {
        const { chapters } = previous;

        if (!chapters.find((chapter) => chapter.id === value.id)) {
          const item: Spec.Progress = {
            version: data.version,
            chapters: [...chapters, value],
          };
          setProgress(item);
        }
      }
    },
    [checkVersion, setProgress, getProgress]
  );

  const edit = useCallback(
    (id: string, value: Partial<Omit<Spec.ProgressChapter, "id">>) => {
      checkVersion();

      const progress = getProgress();
      const previous = get(id);

      if (progress && previous) {
        const item = { ...previous, ...value };
        const chapters = progress.chapters.map((chapter) =>
          chapter.id === id ? item : chapter
        );

        setProgress({ chapters, version: data.version });
      }
    },
    [get, checkVersion, getProgress, setProgress]
  );

  const remove = useCallback(
    (id: string) => {
      checkVersion();

      const progress = getProgress();

      if (progress) {
        const { chapters } = progress;

        const item = {
          version: data.version,
          chapters: chapters.filter((chapter) => chapter.id !== id),
        };

        setProgress(item);
      }
    },
    [checkVersion, getProgress, setProgress]
  );

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
