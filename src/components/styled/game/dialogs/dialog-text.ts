import styled from "styled-components";

export const DialogText = styled.p`
  font-size: 2.25rem;
  letter-spacing: 0.5px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 1000px) {
    font-size: 1.75rem;
  }

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;
