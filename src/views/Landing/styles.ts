import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const ButtonContainer = styled.div<ITheme>`
  display: flex;

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
