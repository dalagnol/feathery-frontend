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

  background-color: black;
  border-top: 1px solid #aaa;
`;

export const Text = styled.p<ITheme>`
    color: ${({ shadowy }) => shadowy};
    margin: 10px;

    font-family: AmaticSCB;

    ${iPhone(`
    font-size: 15px;
    `)}

    ${iPad(`
    font-size: 20px;
    `)}

    ${Mac(`
    font-size: 20px;
    `)}
`;
