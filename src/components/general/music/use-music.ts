import { useContext } from "react";
import { MusicContext } from "./music-context";

export function useMusic() {
  const context = useContext(MusicContext);
  return context;
}
