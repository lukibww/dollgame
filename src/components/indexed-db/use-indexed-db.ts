import { useContext } from "react";
import IndexedDBContext from "./indexed-db-context";

function useIndexedDB() {
  const context = useContext(IndexedDBContext);

  if (!context) return null;

  return context.instance;
}

export default useIndexedDB;
