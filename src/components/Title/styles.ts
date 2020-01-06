import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Title = styled.h1<ITheme>`
  color: ${({ text }) => text};
  margin: 7px;

  @media (min-width: 80.0625em) {
    font-size: 65px;
  }

  @media (min-width: 64.0625em) and (max-width: 80em) {
    font-size: 65px;
  }

  @media (max-width: 64em) {
    font-size: 40px;
  }
`;
