import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Navbar = styled.header<ITheme>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 40px;

  padding: 10px;

  background-color: ${({ primary }) => primary};
  border-bottom: 1px solid ${({ blurry }) => blurry};
`;

export const Button = styled.button<ITheme>`
  color: ${({ text }) => text};
  background-color: ${({ primary }) => primary};
  border: none;

  font-size: 1em;

  padding: 10px 30px;
  margin: 10px 10px;
`;
