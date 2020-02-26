import styled from "styled-components";
import { Theme } from "themes/Theme.d";

export const Palette: Theme = {
  light: {},
  dark: {},
};

export const Container = styled.div<any>`
  font-size: 0.8em;

  position: fixed;

  background-color: #000000bb;

  width: 300px;
  height: 100vh;
  right: 0;
  top: 0;

  box-shadow: 0px 0px 30px #00000044;

  transition: all 0.3s ease-in-out;

  .Header {
    position: sticky;
    top: 0;

    padding: 30px;
    background-color: #000000ee;
  }

  ${({ lock }) =>
    !lock &&
    `
      opacity: 0.1;
      transform: translateX(95%);

  `}

  &:hover {
    transform: translateX(0);
  }

  *:not(input) {
    color: white;

    font-family: Nanum Gothic;
  }

  input {
    width: 100px;
  }

  h1 {
    cursor: pointer;
  }

  h2 {
    text-indent: 1em;
  }

  span {
    margin: 0px 5px;
    cursor: pointer;

    &.Damp {
      opacity: 0.4;
    }
  }

  overflow-y: scroll;
`;
