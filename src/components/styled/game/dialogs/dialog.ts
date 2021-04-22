import styled from "styled-components";

export interface DialogProps {
  column?: boolean;
}

export const Dialog = styled.div<DialogProps>`
  display: flex;
  width: 100%;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: center;
  align-items: center;

  & > * + * {
    margin-top: ${({ column }) => (column ? 64 : 0)}px;
    margin-left: ${({ column }) => (column ? 0 : 64)}px;
  }

  @media (max-width: 1750px) {
    flex-direction: column;

    & > * + * {
      margin-top: 64px;
      margin-left: 0px;
    }
  }
`;
