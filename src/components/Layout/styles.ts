import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Background = styled.div<ITheme>`
  display: flex;
  align-items: center;
  flex-direction: column;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background-color: ${({ primary }) => primary};
`;
