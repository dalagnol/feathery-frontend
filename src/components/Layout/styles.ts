import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Background = styled.div<ITheme>`
  background-color: ${({ primary }) => primary};
`;

export const Content = styled.main`
  width: 100%;
  min-height: calc(100vh - 40px);

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 0px;
`;
