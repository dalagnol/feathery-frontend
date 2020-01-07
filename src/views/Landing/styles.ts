import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const ButtonContainer = styled.div<ITheme>`
  display: flex;

  ${iPhone(`
    flex-direction: column;

    padding: 0 2vw;
  `)}

  ${iPad(`
    flex-direction: column;

    padding: 0 5vw;
  `)}

  ${Mac(`
    flex-direction: row;

    padding: 0 10vw;
  `)}
`;

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

export const Text = styled.p<ITheme>`
  color: ${({ shadowy }) => shadowy};
  margin: 10px;

  font-family: Arial, Helvetica, sans-serif;;
  
  ${iPhone(`
    font-size: 15px;
  `)} ${iPad(`
    font-size: 20px;
  `)} ${Mac(`
    font-size: 20px;
  `)};
`;
