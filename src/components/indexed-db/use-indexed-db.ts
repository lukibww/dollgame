import { useContext } from "react";
import IndexedDBContext from "./indexed-db-context";

function useIndexedDB() {
  const database = useContext(IndexedDBContext);
  return database;
}

export default useIndexedDB;
