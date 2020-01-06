import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Container = styled.div<ITheme>`
  display: flex;
  align-items: center;

  width: 100vw;

  margin: 20px;

  ${iPhone(`
    flex-direction: column;
    justify-content: center;
  `)}

  ${iPad(`
    flex-direction: column;
    justify-content: center;
  `)}

  ${Mac(`
    flex-direction: row;
    justify-content: space-evenly;
  `)}
`;
