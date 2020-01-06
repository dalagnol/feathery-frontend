import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

import { iPhone, iPad, Mac } from "styles/Screens";

export const Container = styled.div<ITheme>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;

  margin: 20px;

  ${iPhone(`
    flex-direction: column;
  `)}

  ${iPad(`
    flex-direction: column;
  `)}

  ${Mac(`
    flex-direction: row;
  `)}
`;
