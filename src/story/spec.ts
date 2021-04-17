/**
 * Progress that user has made
 */
export interface Progress {
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
  id: number;

  // Name of the chapter. Can be taken from the novel
  name: string;

  // Previev of what will happen in the chapter (optional)
  description: string;

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
  id: number;

  // Label representing the dialog (optional)
  label?: string;

  // Description of the situation (optional)
  text?: string;

  // Path to the background source (optional)
  background?: string;

  // If not default we will use different view (optional)
  type: "default" | "success" | "failure";

  // Reference ID to the chapter
  chapterId: number;
}

/**
 * User choice that will lead him to another dialog
 */
export interface Choice {
  // Unique choice ID
  id: number;

  // Text representing the choice
  text: string;

  // Reference to the next dialog
  next: number;

  // Reference ID to the dialog
  dialogId: number;
}
