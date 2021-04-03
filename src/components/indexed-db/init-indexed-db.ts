import { chapters, choices, dialogs } from "../../story/data";
import {
  progressStoreName,
  chapterStoreName,
  choiceStoreName,
  dialogStoreName,
  chapterIndexName,
  dialogIndexName,
} from "../../constans";
import { Progress } from "../../story/spec";

const defaultProgress: Progress = {
  id: 0,
  started: false,
  chapterId: null,
  dialogId: null,
};

const objectStoreOptions: IDBObjectStoreParameters = {
  keyPath: "id",
};

const indexOptions: IDBIndexParameters = {
  unique: false,
};

const initIndexedDB = (database: IDBDatabase) => {
  const progressStore = database.createObjectStore(
    progressStoreName,
    objectStoreOptions
  );
  const chapterStore = database.createObjectStore(
    chapterStoreName,
    objectStoreOptions
  );
  const dialogStore = database.createObjectStore(
    dialogStoreName,
    objectStoreOptions
  );
  const choiceStore = database.createObjectStore(
    choiceStoreName,
    objectStoreOptions
  );

  dialogStore.createIndex(chapterIndexName, "chapterId", indexOptions);
  choiceStore.createIndex(dialogIndexName, "dialogId", indexOptions);

  progressStore.createIndex(chapterIndexName, "chapterId", indexOptions);
  progressStore.createIndex(dialogIndexName, "dialogId", indexOptions);

  progressStore.transaction.oncomplete = () => {
    const store = database
      .transaction(progressStoreName, "readwrite")
      .objectStore(progressStoreName);

    store.add(defaultProgress);
  };

  chapterStore.transaction.oncomplete = () => {
    const store = database
      .transaction(chapterStoreName, "readwrite")
      .objectStore(chapterStoreName);

    chapters.forEach(store.add);
  };

  dialogStore.transaction.oncomplete = () => {
    const store = database
      .transaction(dialogStoreName, "readwrite")
      .objectStore(dialogStoreName);

    dialogs.forEach(store.add);
  };

  choiceStore.transaction.oncomplete = () => {
    const store = database
      .transaction(choiceStoreName, "readwrite")
      .objectStore(choiceStoreName);

    choices.forEach(store.add);
  };
};

export default initIndexedDB;
