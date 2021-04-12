import styled from "styled-components";

export const ChapterGroup = styled.div`
  display: grid;
  grid-gap: 64px;
  width: 100%;
  height: 100%;
  align-items: center;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;
