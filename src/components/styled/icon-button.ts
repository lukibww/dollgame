import styled from "styled-components";

export const IconButton = styled.button`
  padding: 12px;
  margin: -12px;
  display: flex;
  cursor: pointer;
  position: relative;
  outline: 0 none;
  border: 0 none;
  display: inline-flex;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.button};
  border-radius: 50%;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.09);
  }
`;
