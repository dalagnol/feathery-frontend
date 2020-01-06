import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Background = styled.div<ITheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: ${({ primary }) => primary};
`;

export const ButtonContainer = styled.div<ITheme>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;

  @media (min-width: 80.0625em) {
    flex-direction: row;
  }

  @media (min-width: 64.0625em) and (max-width: 80em) {
    flex-direction: column;
  }

  @media (max-width: 64em) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div<ITheme>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;

  @media (min-width: 80.0625em) {
    flex-direction: row;
  }

  @media (min-width: 64.0625em) and (max-width: 80em) {
    flex-direction: collum;
  }

  @media (max-width: 64em) {
    flex-direction: column;
  }
`;
