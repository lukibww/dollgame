import styled from "styled-components";

export interface HomeWindowProps {
  background?: string;
}

export const HomeWindow = styled.div<HomeWindowProps>`
  flex: 1;
  border-width: 3px;
  width: 100%;
  border-style: solid;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: visible;
  height: 0;
  padding-top: 56.25%;
  transition: 0.1s border-color ease;
  background-image: ${({ background }) =>
    background ? `url(${background})` : "none"};
`;
