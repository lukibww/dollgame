import styled from "styled-components";

export interface ChapterBackgroundProps {
  source: string;
}

export const ChapterBackground = styled.div<ChapterBackgroundProps>`
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ source }) => (source ? `url(${source})` : "none")};
  pointer-events: none;
  padding: 100px;

  @media (max-width: 1000px) {
    padding: 50px;
  }

  @media (max-width: 500px) {
    padding: 0px;
  }
`;
