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
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1000px) {
    padding: 48px;
  }

  @media (max-width: 500px) {
    padding: 36px;
  }
`;
