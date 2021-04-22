import styled from "styled-components";
import { Button } from "../../general";

export const HomeButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.text};
`;
