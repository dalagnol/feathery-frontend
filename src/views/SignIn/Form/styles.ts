import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Container = styled.div<ITheme>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;

  margin: 20px;
`;
