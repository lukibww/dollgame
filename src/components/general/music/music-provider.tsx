import { ReactNode, useMemo, useState } from "react";
import { Absolute, Audio } from "../../styled";
import { MusicContext, MusicContextValue } from "./music-context";

import soundtrack from "../../../assets/audio/doll.mp3";
import click from "../../../assets/audio/click.wav";

export interface MusicAudio {
  src: string;
  key: string;
  muted?: boolean;
  loop?: boolean;
}

export interface MusicProviderProps {
  children?: ReactNode;
}

export function MusicProvider({ children }: MusicProviderProps) {
  const [audio, setAudio] = useState<MusicAudio[]>([]);

  const contextValue = useMemo<MusicContextValue>(() => {
    return {
      add: (audio) => {
        setAudio((prevState) => [...prevState, audio]);
      },
      edit: (key, audio) => {
        setAudio((prevState) =>
          prevState.map((item) =>
            key === item.key ? { ...item, ...audio } : item
          )
        );
      },
      remove: (key: string) => {
        setAudio((prevState) => prevState.filter((item) => item.key !== key));
      },
    };
  }, []);

  return (
    <MusicContext.Provider value={contextValue}>
      {/* Preloading will lead to better user experience */}

      <audio src={soundtrack} preload="metadata" />
      <audio src={click} preload="metadata" />

      <Absolute top={0} left={0}>
        {audio.map(({ key, loop, ...other }) => (
          <Audio
            {...other}
            autoPlay
            loop={loop}
            key={key}
            onEnded={() => {
              if (!loop) {
                contextValue.remove(key);
              }
            }}
          />
        ))}
      </Absolute>
      {children}
    </MusicContext.Provider>
  );
}
