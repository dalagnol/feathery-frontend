import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Title = styled.h1<ITheme>`
  color: ${({ text }) => text};
  margin: 7px;

  font-family: Cookie;

  ${iPhone(`
    font-size: 40px;
  `)}

  ${iPad(`
    font-size: 65px;
  `)}

  ${Mac(`
    font-size: 65px;
  `)}
`;
