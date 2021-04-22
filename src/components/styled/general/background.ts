import styled from "styled-components";

export interface BackgroundProps {
  src?: string;
}

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ src }) => (src ? `url(${src})` : "none")};
  opacity: 0.5;
`;
