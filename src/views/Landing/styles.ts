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
