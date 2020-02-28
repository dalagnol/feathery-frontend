import styled from "styled-components";

export const Collections = styled.div<any>`
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;
  max-height: ${({ history }) =>
    !history ? "calc(100vh - 220px)" : " calc(100vh - 360px)"};
`;

export const Container = styled.div<any>`
  font-size: 0.8em;

  position: fixed;

  background-color: #000000bb;

  width: 300px;
  height: 100%;
  right: 0;
  top: 0;

  box-shadow: 0px 0px 30px #00000044;

  transition: all 0.3s ease-in-out;
  max-height: 100vh;
  max-width: 100vw;

  .Header {
    position: sticky;
    top: 0;

    ${({ lock }) => !lock && `margin-top: -35px;`}

    padding: 30px;
    background-color: #000000ee;
  }

  ${({ lock, mini }) =>
    !lock &&
    `
      opacity: 0.1;
      max-height: 50px;
      max-width: 180px;

      &:hover {
        opacity: 0.8;
      }
      ${!mini && "transform: translateX(90%);"}

  `}

  &:hover {
    transform: translateX(0);
  }

  * {
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
    text-indent: 0.5em;
    cursor: pointer;
  }

  p {
    * {
      cursor: pointer;
    }
  }

  span {
    margin: 0px 5px;

    &.Damp {
      opacity: 0.4;
    }
  }

  overflow-y: hidden;

  .History {
    * {
      transition: all 0.3s ease-in-out;
    }

    .Subheader {
      display: flex;

      p {
        color: white;
      }
    }

    background-color: #000000ee;

    h2 {
      background-color: #00000088;
      margin: 0px 5px;
      padding: 10px 0px;
    }

    position: fixed;
    bottom: 0px;

    width: 100%;

    max-height: 200px;
    overflow: hidden;
  }

  * {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Icon = styled.button<any>`
  background-color: #00000000;
  border: none;

  display: flex;
  justify-content: flex-start;

  color: white;

  outline: none;

  cursor: pointer;

  ${({ active }) =>
    !active &&
    `
      opacity: 0.5;
    `}

  &:hover {
    ${({ active }) => !active && `opacity: 0.8;`}
  }
`;

export const Input = styled.input`
  background-color: #00000000;
  border: none;

  font: 1em Nanum Gothic;

  outline: none;

  min-width: 240px;

  animation: slideDown 0.5s;
`;
