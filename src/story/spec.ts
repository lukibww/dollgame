import { start, end, failure } from "../constans";

/**
 * Progress that user has made
 */
export interface Progress {
  // There will be only one progress, but we need a database ID
  id: string;

  // Whether the user has started the game
  started: boolean;

  // Reference ID to the current chapter
  chapterId: string | null;

  // Reference ID to the current dialog
  dialogId: string | null;
}

/**
 * Some thread or episode of the novel
 */
export interface Chapter {
  // Unique chapter ID
  id: string;

  // Name of the chapter. Can be taken from the novel
  name: string;

  // Previev of what will happen in the chapter (optional)
  description?: string;

  // Path to the image source (optional)
  image?: string;

  // Path to the audio played during the gameplay (optional)
  audio?: string;
}

/**
 * Chapter dialog where the user can choose between options
 */
export interface Dialog {
  // Unique dialog ID
  id: string;

  // Label representing the dialog (optional)
  label?: string;

  // Description of the situation (optional)
  text?: string;

  // Path to the background source (optional)
  background?: string;

  // Reference ID to the chapter
  chapterId: string;
}

/**
 * User choice that will lead him to another dialog
 */
export interface Choice {
  // Unique choice ID
  id: string;

  // Text representing the choice
  text: string;

  // Reference to the previous dialog
  prev: ChoiceAction;

  // Reference to the next dialog
  next: ChoiceAction;

  // Reference ID to the dialog
  dialogId: string;
}

/**
 * Action performed when user makes a choice
 * Dialog ID, start, end, or failure of the chapter
 */
export type ChoiceAction = string | typeof start | typeof end | typeof failure;
