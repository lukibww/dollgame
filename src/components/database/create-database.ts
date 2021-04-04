import {
  Database,
  DatabaseRecord,
  DatabaseStore,
  DatabaseIndex,
} from "./database-context";

const resolveRequest = <T = any>(request: IDBRequest) => {
  return new Promise<T>((resolve, reject) => {
    request.onsuccess = (event) => {
      resolve((event.target as any).result as T);
    };
    request.onerror = () => {
      reject("Failed to query a database");
    };
  });
};

const createIndex = <T extends DatabaseRecord>(
  instance: IDBIndex
): DatabaseIndex<T> => {
  const { multiEntry, keyPath, unique, name } = instance;

  return {
    keyPath,
    multiEntry,
    name,
    unique,

    async get(key) {
      const record = await resolveRequest<T>(instance.get(key));
      return record;
    },
  };
};

const createStore = <T extends DatabaseRecord>(
  instance: IDBObjectStore
): DatabaseStore<T> => {
  return {
    async get(key) {
      const record = await resolveRequest<T>(instance.get(key));
      return record;
    },
    async insert(record) {
      await resolveRequest<void>(instance.add(record));
    },
    async update(key, update) {
      const record = await this.get(key);

      for (const key in update) {
        record[key] = update[key] as any;
      }

      await resolveRequest<void>(instance.put(record));
    },
    async delete(key) {
      await resolveRequest<void>(instance.delete(key));
    },
    async clear() {
      await resolveRequest<void>(instance.clear());
    },
    async cursor(callback) {
      const request = instance.openCursor();

      request.onsuccess = (event) => {
        const cursor = (event.target as any).result as IDBCursor;

        if (cursor) {
          callback((cursor as any).value, cursor.continue);
        }
      };
    },
    async createIndex(name, key, options) {
      const index = instance.createIndex(name, key, options);
      return createIndex(index);
    },
    async getIndex(name) {
      const index = instance.index(name);
      return createIndex(index);
    },
    async deleteIndex(name) {
      instance.deleteIndex(name);
    },
  };
};

const createDatabase = (instance: IDBDatabase): Database => {
  return {
    createStore(name, options) {
      const store = instance.createObjectStore(name, options);

      return new Promise((resolve, reject) => {
        store.transaction.oncomplete = () => {
          resolve(createStore(store));
        };

        store.transaction.onerror = () => {
          reject("Failed to create store");
        };
      });
    },
    getStore(name) {
      const transaction = instance.transaction(name, "readwrite");
      const store = transaction.objectStore(name);

      return new Promise((resolve) => resolve(createStore(store)));
    },
  };
};

export default createDatabase;
