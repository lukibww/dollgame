import { createContext } from "react";
import { MusicAudio } from "./music-provider";

export interface MusicContextValue {
  add: (audio: MusicAudio) => void;
  edit: (key: string, audio: Partial<MusicAudio>) => void;
  remove: (key: string) => void;
}

export const MusicContext = createContext<MusicContextValue | null>(null);
