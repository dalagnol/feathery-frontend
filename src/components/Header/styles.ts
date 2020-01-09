import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1<ITheme>`
  color: ${({ text }) => text};
  margin-top: -10px;

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
