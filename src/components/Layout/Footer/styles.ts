import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Footer = styled.div<ITheme>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;

  position: absolute;

  background-color: black;
  border-top: 1px solid #aaa;
`;

export const Text = styled.p<ITheme>`
    color: ${({ shadowy }) => shadowy};
    margin: 10px;

    font-family: Amatic SC B;

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
