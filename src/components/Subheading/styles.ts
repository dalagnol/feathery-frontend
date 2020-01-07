import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Subheading = styled.h1<ITheme>`
  color: ${({ text }) => text};

  font-family: Cookie;

  ${iPhone(`
    font-size: 30px;
  `)}

  ${iPad(`
    font-size: 35px;
  `)}

  ${Mac(`
    font-size: 35px;
  `)}
`;
