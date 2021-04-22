import styled from "styled-components";
import { ChapterLabel } from "./chapter-label";
import { ChapterWindow } from "./chapter-window";

export interface ChapterPreviewProps {
  selected?: boolean;
}

export const ChapterPreview = styled.div<ChapterPreviewProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  outline: 0 none;
  transition: 0.1s transform ease;
  transform: scale(1);

  ${ChapterLabel} {
    color: ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.text};
  }

  ${ChapterWindow} {
    border-color: ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.text};
  }

  &:hover ${ChapterLabel}, &:focus ${ChapterLabel} {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover ${ChapterWindow}, &:focus ${ChapterWindow} {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
