import { ReactNode, useCallback, useEffect, useState } from "react";
import { indexedDbName, indexedDbVersion } from "../../constans";
import createDatabase from "./create-database";
import DatabaseContext, {
  Database,
  DatabaseContextValue,
} from "./database-context";

export interface DatabaseProps {
  children?: ReactNode;
}

function Database({ children }: DatabaseProps) {
  const [state, setState] = useState<DatabaseContextValue>({
    database: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const instance = window.indexedDB;

    if (!instance) {
      setState({
        error: "IndexedDB is not supported in your browser",
        loading: false,
        database: null,
      });

      return;
    }

    const request = instance.open(indexedDbName, indexedDbVersion);

    request.onsuccess = (event) => {
      const instance = (event.target as any).result as IDBDatabase;
      const database = createDatabase(instance);

      setState({ loading: false, database, error: null });
    };

    request.onerror = () => {
      setState({
        error: "Failed to connect with the database",
        loading: false,
        database: null,
      });
    };
  }, []);

  return (
    <DatabaseContext.Provider value={state}>
      {children}
    </DatabaseContext.Provider>
  );
}

export default Database;
