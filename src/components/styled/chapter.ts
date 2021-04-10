import styled from "styled-components";
import { ChapterLabel } from "./chapter-label";
import { ChapterWindow } from "./chapter-window";

export interface ChapterProps {
  selected?: boolean;
}

export const Chapter = styled.div<ChapterProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  outline: 0 none;

  ${ChapterLabel} {
    color: ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.text};
  }

  ${ChapterWindow} {
    border-color: ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.text};
  }

  &:hover ${ChapterLabel}, &:focus ${ChapterLabel} {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover ${ChapterWindow}, &:focus ${ChapterWindow} {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
