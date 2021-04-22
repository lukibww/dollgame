import styled from "styled-components";

export interface DialogLabelProps {
  type?: "default" | "success" | "failure";
}

export const DialogLabel = styled.label<DialogLabelProps>`
  font-size: 2.25rem;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 24px;
  color: ${({ theme, type }) =>
    theme.colors[
      type === "success"
        ? "success"
        : type === "failure"
        ? "error"
        : "secondary"
    ]};
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: 1000px) {
    font-size: 1.875rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
