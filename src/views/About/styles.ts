import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Paragraph = styled.p<ITheme>`
  color: ${({ text }) => text};
  text-align: justify;

  ${iPhone(`
    font-size: 20px;
    margin: 0 3vw;
  `)}

  ${iPad(`
    font-size: 30px;
    margin: 0 5vw;
  `)}

  ${Mac(`
    font-size: 30px;
    margin: 0 10vw;
  `)}
`;

export const Subheading = styled.h1<ITheme>`
  color: ${({ text }) => text};

  font-family: Amatic SC;

  

  ${iPhone(`
    font-size: 30px;
    width: 90%;
  `)}

  ${iPad(`
    font-size: 35px;
    width: 90%;
  `)}

  ${Mac(`
    font-size: 35px;
    width: 80%;
  `)}
`;
