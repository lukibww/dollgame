import styled from "styled-components";

const Link = styled.a`
  display: inline-block;
  font-size: 1.125rem;
  cursor: pointer;
  text-decoration: none;
  padding: 2px;
  font-weight: 600;
  letter-spacing: 0.75px;
  border-bottom: 2px solid transparent;

  font-family: ${({ theme }) => theme.fonts.button};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  }
`;

export default Link;
