import styled from "styled-components";

export interface MenuProps {
  expanded?: boolean;
  count?: number;
}

export const Menu = styled.nav<MenuProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  z-index: 50;
  transition: ${({ expanded }) => (expanded ? 0.2 : 0.1)}s height ease-in-out;
  background-color: ${({ theme }) => theme.colors.background};
  height: ${({ expanded, count }) =>
    expanded && count ? count * (27 + 7) : 0}px;

  > * + * {
    margin-top: 8px;
  }
`;
