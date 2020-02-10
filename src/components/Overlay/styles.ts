import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;

  min-height: 100vh;
  min-width: 100vw;

  background-color: ${({ theme }) => `${theme.primary}bb`};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 1000000;

  top: 0;
  left: 0;

  & > div {
    transition: all 0.12s ease-in-out;
  }

  &:active {
    & > div {
      transform: scale(1.02, 1.02);
    }
  }
`;
