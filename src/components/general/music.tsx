import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";
import { Absolute, Audio } from "../styled";
import sasiedzi from "../../assets/audio/sasiedzi.mp3";

export function Music() {
  const ref = useRef<HTMLAudioElement | null>(null);

  const [location] = useLocation();
  const [allowed, setAllowed] = useState(false);

  const game = useMemo(() => {
    return location.startsWith("/game");
  }, [location]);

  const handleAllow = useCallback(() => {
    setAllowed(true);
  }, []);

  const handlePlay = useCallback(() => {
    const audio = ref.current;

    if (audio) {
      audio.play();
    }
  }, []);

  const handlePause = useCallback(() => {
    const audio = ref.current;

    if (audio) {
      audio.pause();
    }
  }, []);

  useEffect(() => {
    if (game && allowed) {
      handlePlay();
    }

    if (!game) {
      handlePause();
    }
  }, [allowed, game, handlePlay, handlePause]);

  return (
    <Absolute top={0} left={0}>
      <Audio
        ref={ref}
        src={sasiedzi}
        onCanPlayThrough={handleAllow}
        onEnded={handlePlay}
      />
    </Absolute>
  );
}
