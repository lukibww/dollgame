import styled from "styled-components";

export interface ParagraphProps {
  gutter?: boolean;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: 2.125rem;
  letter-spacing: 0.5px;
  line-height: 1.5;
  font-weight: 400;

  margin-bottom: ${({ gutter }) => (gutter ? 32 : 0)}px;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export default Paragraph;
