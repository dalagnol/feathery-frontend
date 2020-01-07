import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Button = styled.button<ITheme>`
  cursor: pointer;

  color: ${({ text }) => text};
  border-color: ${({ blurry }) => blurry};
  background-color: ${({ primary }) => primary};

  font-family: Amatic_SC_B;
  font-size: 25px;
  border-radius: 10px;

  padding: 10px 30px;
  margin: 10px 10px;

  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px #00000022;
  }
`;
