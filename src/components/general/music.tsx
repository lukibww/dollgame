import { useRoute } from "wouter";
import { Audio } from "../styled";
import sasiedzi from "../../assets/audio/sasiedzi.mp3";

export function Music() {
  const [game] = useRoute("/game/:rest*");

  if (!game) return null;

  return (
    <Audio autoPlay loop>
      <source src={sasiedzi} type="audio/mpeg" />
    </Audio>
  );
}
