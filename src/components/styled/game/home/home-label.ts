import styled from "styled-components";

export const HomeLabel = styled.p`
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: 3px;
  margin-bottom: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: 0.1s color ease;
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;
