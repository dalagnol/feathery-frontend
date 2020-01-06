import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const ButtonContainer = styled.div<ITheme>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  margin: 20px;

  ${iPhone(`
    flex-direction: column;
  `)}

  ${iPad(`
    flex-direction: column;
  `)}

  ${Mac(`
    flex-direction: row;
  `)}
`;

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
