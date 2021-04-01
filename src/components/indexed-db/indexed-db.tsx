import { ReactNode, useEffect, useState } from "react";
import IndexedDBContext, { IndexedDBContextValue } from "./indexed-db-context";

const INDEXED_DB_NAME = "Lalka";

export interface IndexedDBProps {
  children?: ReactNode;
}

function IndexedDB({ children }: IndexedDBProps) {
  const [state, setState] = useState<IndexedDBContextValue>("loading");

  useEffect(() => {
    const instance = window.indexedDB;

    if (!instance) {
      setState("not supported");
      return;
    }

    const request = instance.open(INDEXED_DB_NAME);

    request.onerror = () => setState("not allowed");
    request.onsuccess = (event) => setState((event.target as any).result);
    request.onupgradeneeded = (event) => setState((event.target as any).result);
  }, []);

  useEffect(() => {
    if (state && typeof state === "object") {
      state.onerror = () => setState("error");
    }
  }, [state]);

  return (
    <IndexedDBContext.Provider value={state}>
      {children}
    </IndexedDBContext.Provider>
  );
}

export default IndexedDB;
