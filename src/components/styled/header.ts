import styled from "styled-components";

interface HeaderProps {
  small?: boolean;
}

export const Header = styled.h1<HeaderProps>`
  display: block;
  font-size: ${({ small }) => (small ? 5 : 10)}rem;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
`;
