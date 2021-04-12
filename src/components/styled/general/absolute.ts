import styled from "styled-components";

export interface AbsoluteProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export const Absolute = styled.div<AbsoluteProps>`
  position: absolute;
  z-index: 100;

  ${({ top }) => (top ? `top: ${top}px;` : "")}
  ${({ left }) => (left ? `left: ${left}px;` : "")}
  ${({ right }) => (right ? `right: ${right}px;` : "")}
  ${({ bottom }) => (bottom ? `bottom: ${bottom}px;` : "")}
`;
