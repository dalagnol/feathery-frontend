import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Background = styled.div<ITheme>`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ primary }) => primary};
`;
