import { chapters, choices, dialogs } from "../../story/data";
import {
  chapterStoreName,
  choiceStoreName,
  dialogStoreName,
  chapterIndexName,
  dialogIndexName,
} from "../../constans";

const initIndexedDB = (database: IDBDatabase) => {
  const chapterStore = database.createObjectStore(chapterStoreName, {
    keyPath: "id",
  });
  const dialogStore = database.createObjectStore(dialogStoreName, {
    keyPath: "id",
  });
  const choiceStore = database.createObjectStore(choiceStoreName, {
    keyPath: "id",
  });

  dialogStore.createIndex(chapterIndexName, "chapterId", { unique: false });
  choiceStore.createIndex(dialogIndexName, "dialogId", { unique: false });

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
