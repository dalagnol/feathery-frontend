import styled from "styled-components";
import { Theme } from "themes/Theme.d";

export const Palette: Theme = {
  light: {},
  dark: {},
};

export const Container = styled.div`
  position: fixed;

  background-color: #00000088;

  width: 300px;
  height: 100vh;
  right: 0;
  top: 0;

  box-shadow: 0px 0px 30px #00000044;

  padding: 0px 30px;

  * {
    color: white;

    font-family: Nanum Gothic;
  }
`;
