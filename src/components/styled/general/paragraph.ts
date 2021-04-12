import styled from "styled-components";

interface ParagraphProps {
  gutter?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: 2.125rem;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: ${({ gutter }) => (gutter ? 32 : 0)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 1000px) {
    font-size: 1.75rem;
  }

  @media (max-width: 500px) {
    font-size: 1.375rem;
  }
`;
