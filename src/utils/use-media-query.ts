import { useCallback, useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const createMediaQuery = useCallback(() => {
    return window.matchMedia(query);
  }, [query]);

  const [matches, setMatches] = useState(() => {
    const mediaQuery = createMediaQuery();
    return mediaQuery.matches;
  });

  const handleMediaChange = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = createMediaQuery();

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [createMediaQuery, handleMediaChange]);

  return matches;
}
