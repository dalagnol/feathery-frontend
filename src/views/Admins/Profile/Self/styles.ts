import styled from "styled-components";

import { iPhone } from "styles/screens";

export const Form = styled.form`
  padding: 50px;

  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  header {
    height: 200px;
    width: 100%;

    display: flex;
    flex-direction: column;

    flex: 0.5;

    align-items: center;

    div {
      width: 200px;
      height: 200px;
      div {
        box-shadow: 0px 0px 50px ${({ theme }) => theme.shadowy};
      }
    }

    flex: 0.4;

    ${iPhone(`
      display: flex;
      align-items: center;
    `)}

    h1 {
      font-family: Nanum Gothic;
      text-align: center;
    }
  }

  main {
    display: flex;
    flex-direction: column;

    label {
      font: 2em Amatic SC;
    }

    & > * {
      margin: 10px;
    }

    & > div {
      margin: 5px 0px;
      width: 100%;
      height: 45px;

      padding: 0px 10px;

      .SelectContainer {
        border-radius: 10px;
        padding: 0px;
        position: relative;
      }
    }

    header {
      display: flex;
      flex-direction: row;
      flex: 1;

      margin: 0px;

      justify-content: space-between;
    }

    flex: 0.5;
  }
`;
