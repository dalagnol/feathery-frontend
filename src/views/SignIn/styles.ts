import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Background = styled.div<ITheme>`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: ${({ primary }) => primary};
`;
