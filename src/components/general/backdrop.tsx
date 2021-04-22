import { Background } from "../styled";
import { useBackground } from "./background";

export function Backdrop() {
  const background = useBackground();
  const src = background?.[0];

  return <Background src={src} />;
}
