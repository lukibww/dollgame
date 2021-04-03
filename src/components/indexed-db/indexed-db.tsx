import { ReactNode, useEffect, useState } from "react";
import { indexedDbName, indexedDbVersion } from "../../constans";
import IndexedDBContext, { IndexedDBContextValue } from "./indexed-db-context";
import initIndexedDB from "./init-indexed-db";

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

    const request = instance.open(indexedDbName, indexedDbVersion);

    request.onerror = () => setState("not allowed");
    request.onsuccess = (event) => setState((event.target as any).result);
    request.onupgradeneeded = (event) => {
      const database = (event.target as any).result as IDBDatabase;

      setState(database);
      initIndexedDB(database);
    };
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
