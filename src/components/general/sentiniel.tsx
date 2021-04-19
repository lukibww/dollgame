import { useRef } from "react";
import { useLocation } from "wouter";

export function Sentiniel() {
  const [location, setLocation] = useLocation();

  const started = useRef(!location.startsWith("/game"));

  if (!started.current) {
    started.current = true;
    setLocation("/");
  }

  return null;
}
