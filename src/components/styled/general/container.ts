import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  padding: 80px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1000px) {
    padding: 48px;
    padding-top: 80px;
  }

  @media (max-width: 500px) {
    padding: 36px;
    padding-top: 60px;
  }

  @media (max-width: 360px) {
    padding: 12px;
    padding-top: 60px;
  }
`;
