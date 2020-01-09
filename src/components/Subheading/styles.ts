import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Subheading = styled.h1<ITheme>`
  color: ${({ text }) => text};

  font-family: Amatic SC;

  ${iPhone(`
    font-size: 24px;
    width: 300px;
  `)}

  ${iPad(`
    font-size: 25px;
    width: 365px;
  `)}

  ${Mac(`
    font-size: 30px;
    width: 365px;
  `)}
`;
