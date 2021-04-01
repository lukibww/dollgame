import { ReactNode, useMemo } from "react";
import IndexedDBContext, { IndexedDBContextValue } from "./indexed-db-context";

export interface IndexedDBProps {
  children?: ReactNode;
}

function IndexedDB({ children }: IndexedDBProps) {
  const contextValue = useMemo<IndexedDBContextValue>(() => {
    const instance = window.indexedDB;

    return {
      instance,
    };
  }, []);

  return (
    <IndexedDBContext.Provider value={contextValue}>
      {children}
    </IndexedDBContext.Provider>
  );
}

export default IndexedDB;
