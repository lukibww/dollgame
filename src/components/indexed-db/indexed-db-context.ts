import { createContext } from "react";

export interface IndexedDBContextValue {
  instance: IDBFactory;
}

const IndexedDBContext = createContext<IndexedDBContextValue | null>(null);

export default IndexedDBContext;
