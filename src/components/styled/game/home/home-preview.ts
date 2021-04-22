import styled from "styled-components";
import { HomeLabel } from "./home-label";
import { HomeWindow } from "./home-window";

export interface HomePreviewProps {
  selected?: boolean;
}

export const HomePreview = styled.div<HomePreviewProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  outline: 0 none;
  transition: 0.1s transform ease;
  transform: scale(1);

  ${HomeLabel} {
    color: ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.text};
  }

  ${HomeWindow} {
    border-color: ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.text};
  }

  &:hover ${HomeLabel}, &:focus ${HomeLabel} {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover ${HomeWindow}, &:focus ${HomeWindow} {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
