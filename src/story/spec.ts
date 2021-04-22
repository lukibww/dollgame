/**
 * Progress that user has made
 */
export interface Progress {
  // Version of the app
  version: number;

  // Progress chapters
  chapters: ProgressChapter[];
}

/**
 * Each chapter can have its own progress
 */
export interface ProgressChapter {
  // Unique progress chapter ID. Same as `chapterId`
  id: string;

  // Reference ID to the current chapter
  chapterId: string;

  // Reference ID to the current dialog
  dialogId: string;
}

/**
 * Some thread or episode of the novel
 */
export interface Chapter {
  // Unique chapter ID
  id: string;

  // Chapter index used for ordering
  index: number;

  // Name of the chapter. Can be taken from the novel
  name: string;

  // Slug to display in the url
  slug: string;

  // Previev of what will happen in the chapter
  description: string;

  // Path to the background image
  background: string;
}

/**
 * Chapter dialog where the user can choose between options
 */
export interface Dialog {
  // Unique dialog ID
  id: string;

  // Dialog index used for ordering
  index: number;

  // Label representing the dialog (optional)
  label?: string;

  // Description of the situation (optional)
  text?: string;

  // Path to the background source (optional)
  background?: string;

  // If not default we will use different view (optional)
  type: "default" | "success" | "failure";

  // Reference ID to the chapter
  chapterId: string;
}

/**
 * User choice that will lead him to another dialog
 */
export interface Choice {
  // Unique choice ID
  id: string;

  // Choice index used for ordering
  index: number;

  // Text representing the choice
  text: string;

  // Reference to the next dialog
  next: string;

  // Reference ID to the dialog
  dialogId: string;
}
