import styled from "styled-components";

export interface BackgroundProps {
  source?: string;
}

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ source }) => (source ? `url(${source})` : "none")};
  pointer-events: none;
  z-index: -1;
`;
