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
  padding: 120px 60px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1000px) {
    padding: 96px 48px;
  }

  @media (max-width: 500px) {
    padding: 72px 36px;
  }

  @media (max-width: 360px) {
    padding: 48px 24px;
  }
`;
