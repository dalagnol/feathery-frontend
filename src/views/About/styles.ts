import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

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

export const Paragraph = styled.p<ITheme>`
  color: ${({ shadowy }) => shadowy};
  margin: 10px;

  ${iPhone(`
    font-size: 20px;
  `)}

  ${iPad(`
    font-size: 40px;
  `)}

  ${Mac(`
    font-size: 40px;
  `)}
`;
