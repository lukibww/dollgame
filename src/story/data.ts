import { Chapter, Choice, Dialog } from "./spec";

/**
 * The file where all the data is stored
 * It will be put into IndexedDB at runtime
 *
 * Because its simple school project we do not care about
 * the fact that someone could look the to source code and
 * start cheating
 */

export const chapters: Chapter[] = [];

export const dialogs: Dialog[] = [];

export const choices: Choice[] = [];
