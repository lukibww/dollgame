import styled from "styled-components";

const Header = styled.h1`
  display: block;
  padding: 24px;
  font-size: 10rem;
  line-height: 1.2;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
`;

export default Header;
