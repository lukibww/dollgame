/**
 * Everything in one place
 */
export interface Data {
  metadata: Metadata;

  chapters: Chapter[];

  dialogs: Dialog[];

  choices: Choice[];

  characters: Character[];
}

/**
 * General data used across the app
 */
export interface Metadata {
  // Path to the win audio
  win: string;

  // Path to the loose audio
  loose: string;
}

/**
 * Some thread or episode of the novel
 */
export interface Chapter {
  // Unique chapter ID
  id: number;

  // The name of the chapter
  name: string;

  // The description of the chapter
  description: string;

  // Slug to display in the url
  slug: string;

  // Path to the audio
  audio: string;

  // Path to the background image
  background: string;
}

/**
 * Chapter dialog where the user can choose between options
 */
export interface Dialog {
  // Unique dialog ID
  id: number;

  // Description of the situation
  text: string;

  // If not default we will use different view
  type: "default" | "success" | "failure";

  // Reference ID to the character
  characterId: number | null;

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

/**
 * The story character
 */
export interface Character {
  // Unique character ID
  id: number;

  // Diplay name of the character
  name: string;

  // Path to the character image source
  image: string | null;
}
