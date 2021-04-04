import { createContext } from "react";

export type DatabaseRecord = Record<string, any>;

export interface DatabaseIndex<T extends DatabaseRecord> {
  keyPath: string | string[];
  multiEntry: boolean;
  name: string;
  unique: boolean;
  get: (key: string) => Promise<T>;
}

export interface DatabaseStore<T extends DatabaseRecord> {
  get: (key: string) => Promise<T>;
  update: (key: string, record: Partial<T>) => Promise<void>;
  insert: (record: T) => Promise<void>;
  delete: (key: string) => Promise<void>;
  cursor: (callback: (record: T, next: () => void) => void) => Promise<void>;
  clear: () => Promise<void>;
  createIndex: (
    name: string,
    key: string,
    options?: IDBIndexParameters
  ) => Promise<DatabaseIndex<T>>;
  getIndex: (name: string) => Promise<DatabaseIndex<T>>;
  deleteIndex: (name: string) => Promise<void>;
}

export interface Database {
  createStore: <T extends DatabaseRecord>(
    name: string,
    options?: IDBObjectStoreParameters
  ) => Promise<DatabaseStore<T>>;
  getStore: <T extends DatabaseRecord>(
    name: string
  ) => Promise<DatabaseStore<T>>;
}

export interface DatabaseContextValue {
  database: Database | null;
  error: string | null;
  loading: boolean;
}

const DatabaseContext = createContext<DatabaseContextValue | null>(null);

export default DatabaseContext;
