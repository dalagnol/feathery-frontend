import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Title = styled.h1<ITheme>`
  color: ${({ text }) => text};
`;
