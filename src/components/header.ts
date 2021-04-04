import styled from "styled-components";

export interface HeaderProps {
  small?: boolean;
}

const Header = styled.h1<HeaderProps>`
  display: block;
  font-size: ${({ small }) => (small ? 5 : 10)}rem;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
`;

export default Header;
