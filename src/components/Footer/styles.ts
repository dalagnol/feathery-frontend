import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Footer = styled.div<ITheme>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  bottom: 0;
  left: 0;

  width: 100vw;
  height: 40px;

  padding: 10px;

  background-color: ${({ text }) => text};
  border-top: 1px solid ${({ blurry }) => blurry};
`;

export const Text = styled.p<ITheme>`
    color: ${({ shadowy }) => shadowy};
    margin: 10px;

    ${iPhone(`
    font-size: 7px;
    `)}

    ${iPad(`
    font-size: 15px;
    `)}

    ${Mac(`
    font-size: 15px;
    `)}
`;
