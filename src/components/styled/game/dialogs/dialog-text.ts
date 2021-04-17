import styled from "styled-components";

export const DialogText = styled.p`
  font-size: 1.75rem;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;
