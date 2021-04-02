import { Chapter } from "./spec";

/**
 * The file where all the data is stored
 * It will be put into IndexedDB at runtime
 *
 * Because its simple school project we do not care about
 * the fact that someone could look the to source code and
 * start cheating
 */

const chapters: Chapter[] = [];

export default chapters;
