import styled from "styled-components";

export interface DialogCharacterProps {
  source?: string;
}

export const DialogCharacter = styled.div<DialogCharacterProps>`
  display: flex;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 15%);
  width: 150px;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ source }) => (source ? `url(${source})` : "none")};

  @media (max-width: 500px) {
    width: 75px;
    height: 75px;
  }
`;
