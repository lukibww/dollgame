import styled from "styled-components";
import { HomeLabel } from "./home-label";
import { HomeWindow } from "./home-window";
import { HomeButton } from "./home-button";

export const HomePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  outline: 0 none;
  transition: 0.1s transform ease;
  transform: scale(1);

  &:hover ${HomeButton}, &:focus ${HomeButton} {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover ${HomeLabel}, &:focus ${HomeLabel} {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover ${HomeWindow}, &:focus ${HomeWindow} {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
