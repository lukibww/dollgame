import { createContext } from "react";

export type IndexedDBContextValue =
  | IDBDatabase
  | "loading"
  | "not supported"
  | "not allowed"
  | "error"
  | null;

const IndexedDBContext = createContext<IndexedDBContextValue>(null);

export default IndexedDBContext;
