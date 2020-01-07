import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Subheading = styled.h1<ITheme>`
  color: ${({ text }) => text};

  font-family: AmaticSC;

  ${iPhone(`
    font-size: 30px;
    width: 265px;
  `)}

  ${iPad(`
    font-size: 35px;
    width: 365px;
  `)}

  ${Mac(`
    font-size: 35px;
    width: 365px;
  `)}
`;
