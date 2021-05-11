import styled from "styled-components";

export const DialogChoices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 800px;

  @media (max-width: 1200px) {
    min-width: 100%;
  }
`;
