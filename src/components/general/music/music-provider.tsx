import { ReactNode, useMemo, useState } from "react";
import { Absolute, Audio } from "../../styled";
import { MusicContext, MusicContextValue } from "./music-context";

import gameplay from "../../../assets/audio/gameplay.mp3";
import win from "../../../assets/audio/win.mp3";
import loose from "../../../assets/audio/loose.mp3";
import click from "../../../assets/audio/click.mp3";

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
      add: (audio) =>
        setAudio((prevState) => {
          if (!prevState.map((item) => item.key).includes(audio.key)) {
            return [...prevState, audio];
          }

          return prevState;
        }),
      edit: (key, audio) =>
        setAudio((prevState) =>
          prevState.map((item) =>
            key === item.key ? { ...item, ...audio } : item
          )
        ),
      remove: (key: string) =>
        setAudio((prevState) => {
          if (prevState.map((item) => item.key).includes(key)) {
            return prevState.filter((item) => item.key !== key);
          }

          return prevState;
        }),
    };
  }, []);

  return (
    <MusicContext.Provider value={contextValue}>
      <audio src={click} preload="auto" />

      <audio src={gameplay} preload="metadata" />
      <audio src={win} preload="metadata" />
      <audio src={loose} preload="metadata" />

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
