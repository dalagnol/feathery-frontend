import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Button = styled.button<ITheme>`
  color: ${({ text }) => text};
  border-color: ${({ blurry }) => blurry};
  background-color: ${({ primary }) => primary};

  font-size: 1em;
  border-radius: 10px;

  padding: 10px 30px;
  margin: 10px 10px;
`;
