import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Background = styled.div<ITheme>`
  display: flex;
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
  color: ${({ text }) => text};
  text-align: justify;

  ${iPhone(`
    font-size: 10px;
    margin: 0 2vw;
  `)}

  ${iPad(`
    font-size: 20px;
    margin: 0 5vw;
  `)}

  ${Mac(`
    font-size: 20px;
    margin: 0 10vw;
  `)}
`;
