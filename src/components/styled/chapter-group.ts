import styled from "styled-components";

export const ChapterGroup = styled.div`
  display: grid;
  padding: 32px;
  grid-gap: 64px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
