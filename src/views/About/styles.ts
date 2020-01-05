import styled from "styled-components";
import { ITheme } from "interfaces/Theme";

export const Background = styled.div<ITheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: ${({ primary }) => primary};
`;

export const Paragraph = styled.p<ITheme>`
  font-size: 0.8em;

  color: ${({ shadowy }) => shadowy};
`;

export const Title = styled.h1<ITheme>`
  color: ${({ text }) => text};
`;

export const Button = styled.button<ITheme>`
  color: ${({ text }) => text};
  border-color: ${({ blurry }) => blurry};
  background-color: ${({ primary }) => primary};

  font-size: 1em;
  border-radius: 10px;

  padding: 10px 30px;
`;
